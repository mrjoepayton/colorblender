<?php

if(strpos($_SERVER['HTTP_HOST'],'8888') !== false){

	error_reporting(E_ALL & ~E_NOTICE);

	$theHTTP = "http";
	$baseURL = "http://".$_SERVER['HTTP_HOST']."/";
	$baseDIR = $_SERVER['DOCUMENT_ROOT'];
	$verDate = "?ver=013017";
} else {
	$theHTTP = "https";
	$baseURL = "https://".$_SERVER['HTTP_HOST']."/colorblender/";
	$baseDIR = $_SERVER['DOCUMENT_ROOT']."/colorblender";
	$verDate = "?ver=013017";
}
	
?>