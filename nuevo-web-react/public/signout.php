<?php
require('../lib/Auth.php');

$auth = new Auth();

if ($auth->signout()) {
    header('location: http://dev.erzsphilos.com/');
}
