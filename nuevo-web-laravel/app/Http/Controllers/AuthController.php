<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Cookie;

class AuthController extends Controller
{

    private $_first_key = '>KHI!cJ1h7YQGT\TWO-L';
    private $_second_key = 'j*xwpTs-i?*M0FWoUgKP';
    private $_method = 'aes-256-cbc';
    private $_algo = 'sha3-512';

    public function __construct()
    {
    }

    public function signin(Request $request): mixed
    {
        $user = User::where('email', $request->post('email'))->first();

        if (!$user || !Hash::check($request->post('password'), $user->password)) {
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
        Cookie::queue('personal_uuid', $this->_encrypt($user->UUID));

        return $this->_json(true);
    }

    public function signout(): mixed
    {
    }

    public function check(): mixed
    {
        $uuid = $this->_decrypt($_COOKIE['personal_uuid']);
        $user = User::where('UUID', $uuid)->first();

        if (!$user) {
            return $this->_json(false);
        }

        if ($user->remember_tokens) {
            $authorized = false;
            $remember_tokens = json_decode($user->remember_tokens);
            $new_tokens = [];
            foreach ($remember_tokens as $token) {
                if ($token[0] == $_COOKIE['personal_access_token']) {
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

            return $this->_json($authorized);
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
