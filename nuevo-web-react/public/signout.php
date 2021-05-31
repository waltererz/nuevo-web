<?php
error_reporting(E_ALL);
require('../lib/Auth.php');

$auth = new Auth();

if ($auth->signout()) {
    header('location: http://dev.erzsphilos.com/');
}
