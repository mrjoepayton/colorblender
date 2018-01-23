<?php

//SHOW ALL PHP ERRORS
error_reporting(E_ALL & ~E_NOTICE);

// -------------------------- SET GLOBAL VARS -------------------------------//
// -------------------------- SET GLOBAL VARS -------------------------------//

$baseURL = "http://".$_SERVER['HTTP_HOST']."/";
$baseDIR = $_SERVER['DOCUMENT_ROOT'];
$verDate = "?ver=120116";

// -------------------------- CONNECT TO REMOTE DATABASE -------------------------------//
// -------------------------- CONNECT TO REMOTE DATABASE -------------------------------//

//require($_SERVER['DOCUMENT_ROOT'].'/inc/medoo.php');

//$database = new medoo([
//    'database_type' => 'mysql',
//    'database_name' => 'db50330_wp',
//    'server' => 'external-db.s50330.gridserver.com',
//    'username' => 'db50330_wp',
//    'password' => 'y,Sj0C[a0y',
//    'charset' => 'utf8'
//]);

// -------------------------- GET THE CLIENT'S IP ADDRESS -------------------------------//
// -------------------------- GET THE CLIENT'S IP ADDRESS -------------------------------//

function get_client_ip() {
	
	if (getenv("HTTP_CLIENT_IP") && strcasecmp(getenv("HTTP_CLIENT_IP"), "unknown")) {
		$ip = getenv("HTTP_CLIENT_IP");
	} else if (getenv("HTTP_X_FORWARDED_FOR") && strcasecmp(getenv("HTTP_X_FORWARDED_FOR"), "unknown")){
		$ip = getenv("HTTP_X_FORWARDED_FOR");
	} else if (getenv("REMOTE_ADDR") && strcasecmp(getenv("REMOTE_ADDR"), "unknown")) {
		$ip = getenv("REMOTE_ADDR");
	} else if (isset($_SERVER['REMOTE_ADDR']) && $_SERVER['REMOTE_ADDR'] && strcasecmp($_SERVER['REMOTE_ADDR'], "unknown")) {
		$ip = $_SERVER['REMOTE_ADDR'];
	} else {
		$ip = "unknown";
	}
	
	if($ip=='::1' || $ip=='::0'){
		$ip="unknown";	
	}
	
	return($ip);
	
}
	
?>