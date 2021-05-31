<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Password;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Str;

class AuthController extends Controller
{

    private string $_first_key = '';
    private string $_second_key = '';
    private string $_method = 'aes-256-cbc';
    private string $_algo = 'sha3-512';

    public function __construct()
    {
        $this->_first_key = base64_decode(env('OPENSSL_ENCRYPTION_FIRST_KEY'));
        $this->_second_key = base64_decode(env('OPENSSL_ENCRYPTION_SECOND_KEY'));
    }

    public function signin(Request $request): mixed
    {
        $user = User::where('email', $request->post('email'))->first();

        if (!$user) {
            return $this->_json(false);
        }

        $password = Password::where('person_id', $user->id)->first();

        if (!$password || !Hash::check($request->post('password'), $password->password)) {
            return $this->_json(false);
        }

        $token = $user->createToken($request->device_name)->plainTextToken;

        if ($user->remember_tokens) {
            $new_tokens = json_decode($user->remember_tokens);
            array_push($new_tokens, array($token, 0));
            $new_tokens = json_encode($new_tokens);
        } else {
            $new_tokens = json_encode(array(array($token, 0)));
        }

        $user->remember_tokens = $new_tokens;
        $user->save();

        Cookie::queue('personal_access_token', $token, 0, null, null, false, false);
        Cookie::queue('personal_unique_code', $this->_encrypt($user->unique_code));

        return $this->_json(true);
    }

    public function signout(Request $request): mixed
    {
        if (!isset($_COOKIE['personal_unique_code'])) {
            if ($request->post('personal_unique_code')) {
                $unique_code = $request->post('personal_unique_code');
            } else {
                return $this->_json(false);
            }
        } else {
            $unique_code = $_COOKIE['personal_unique_code'];
        }

        if (!isset($_COOKIE['personal_access_token'])) {
            if ($request->post('personal_access_token')) {
                $access_token = $request->post('personal_access_token');
            } else {
                return $this->_json(false);
            }
        } else {
            $access_token = $_COOKIE['personal_access_token'];
        }

        $user = User::where('unique_code', $this->_decrypt($unique_code))->first();

        if ($user->remember_tokens) {
            $signout = false;
            $new_tokens = [];
            $remember_tokens = json_decode($user->remember_tokens);

            foreach ($remember_tokens as $token) {
                if ($token[0] == $access_token) {
                    $signout = true;
                    setcookie('personal_unique_code', '', time() - 3600);
                    setcookie('personal_access_token', '', time() - 3600);
                    break;
                } else {
                    if ($token[1] !== 0) {
                        $new_tokens[] = $token;
                    }
                }
            }

            $user->remember_tokens = json_encode($new_tokens);
            $user->save();

            return $this->_json($signout);
        } else {
            return $this->_json(false);
        }
    }

    public function check(Request $request): mixed
    {
        if (!isset($_COOKIE['personal_unique_code'])) {
            if ($request->post('personal_unique_code')) {
                $unique_code = $request->post('personal_unique_code');
            } else {
                return $this->_json(false);
            }
        } else {
            $unique_code = $_COOKIE['personal_unique_code'];
        }

        if (!isset($_COOKIE['personal_access_token'])) {
            if ($request->post('personal_access_token')) {
                $access_token = $request->post('personal_access_token');
            } else {
                return $this->_json(false);
            }
        } else {
            $access_token = $_COOKIE['personal_access_token'];
        }

        $user = User::where('unique_code', $this->_decrypt($unique_code))->first();

        if (!$user) {
            return $this->_json(false);
        }

        if ($user->remember_tokens) {
            $authorized = false;
            $remember_tokens = json_decode($user->remember_tokens);
            $new_tokens = [];
            foreach ($remember_tokens as $token) {
                if ($token[0] == $access_token) {
                    $new_tokens[] = $token;
                    $authorized = true;
                    break;
                } else {
                    if ($token[1] !== 0) {
                        $new_tokens[] = $token;
                    }
                }
            }
            $user->remember_tokens = json_encode($new_tokens);
            $user->save();

            if ($authorized) {
                if ($request->post('return_uuid') == true) {
                    return $this->_json($user->uuid);
                } else {
                    return $this->_json(true);
                }
            } else {
                return $this->_json(false);
            }
        } else {
            return $this->_json(false);
        }
    }

    private function _json(mixed $data = [], int $status = 200)
    {
        return response()->json($data, $status);
    }

    private function _encrypt(string $string): string
    {
        $iv_length = openssl_cipher_iv_length($this->_method);
        $iv = openssl_random_pseudo_bytes($iv_length);
        $first_encrypted = openssl_encrypt($string, $this->_method, $this->_first_key, OPENSSL_RAW_DATA, $iv);
        $second_encrypted = hash_hmac($this->_algo, $first_encrypted, $this->_second_key, true);
        $encrypted = base64_encode($iv . $second_encrypted . $first_encrypted);
        return $encrypted;
    }

    private function _decrypt(string $string): string
    {
        $string = base64_decode($string);
        $iv_length = openssl_cipher_iv_length($this->_method);
        $iv = substr($string, 0, $iv_length);
        $second_encrypted = substr($string, $iv_length, 64);
        $first_encrypted = substr($string, $iv_length + 64);
        $decrypted = openssl_decrypt($first_encrypted, $this->_method, $this->_first_key, OPENSSL_RAW_DATA, $iv);
        $second_encrypted_new = hash_hmac($this->_algo, $first_encrypted, $this->_second_key, true);
        if (hash_equals($second_encrypted, $second_encrypted_new)) {
            return $decrypted;
        }
        return '';
    }
}
