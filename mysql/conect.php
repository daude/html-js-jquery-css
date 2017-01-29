<?php
define('host', 'localhost');
define('username', 'root');
define('password', '');
define('database', 'niit');

$link= new mysqli(host, username, password, database);
if($link->connect_error > 0){
	exit("Connection Error.".$link->connect_error);
}
?>