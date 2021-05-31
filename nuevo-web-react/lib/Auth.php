<?php

class Auth
{
    private bool $_authorized = false;
    private string $_uuid = '';

    public function __construct()
    {
        $url = 'http://back.dev.erzsphilos.com/api/auth/check';

        $postfields = [];
        $postfields['return_uuid'] = true;

        $headers = [];
        $headers[] = 'Content-Type: application/json';

        if (isset($_COOKIE['personal_access_token'])) {
            $postfields['personal_access_token'] = $_COOKIE['personal_access_token'];
            $headers[] = 'Authorization: Bearer ' . $_COOKIE['personal_access_token'];
        } else {
            return;
        }

        if (isset($_COOKIE['personal_unique_code'])) {
            $postfields['personal_unique_code'] = $_COOKIE['personal_unique_code'];
        } else {
            return;
        }

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postfields));

        $response = json_decode(curl_exec($ch));

        if ($response) {
            $this->_authorized = true;
            $this->_uuid = $response;
        }

        curl_close($ch);
    }

    public function signout(): bool
    {
        if (!$this->_authorized) {
            return true;
        }

        $url = 'http://back.dev.erzsphilos.com/api/auth/signout';

        $postfields = [];

        $headers = [];
        $headers[] = 'Content-Type: application/json';

        if (isset($_COOKIE['personal_access_token'])) {
            $postfields['personal_access_token'] = $_COOKIE['personal_access_token'];
            $headers[] = 'Authorization: Bearer ' . $_COOKIE['personal_access_token'];
        } else {
            return false;
        }

        if (isset($_COOKIE['personal_unique_code'])) {
            $postfields['personal_unique_code'] = $_COOKIE['personal_unique_code'];
        } else {
            return false;
        }

        $ch = curl_init();

        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($postfields));

        $response = json_decode(curl_exec($ch));

        if ($response) {
            return true;
        } else {
            return false;
        }
    }

    public function uuid(): string
    {
        return $this->_uuid;
    }
}
