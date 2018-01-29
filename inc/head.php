<!DOCTYPE html>

<html lang="en">
	
	<head>
		
	<!-- /////////// PAGE TITLE ELEMENT //////////// -->
	<!-- /////////// BASELINE META TAGS //////////// -->
		
		<title><?php echo($pageTitle); ?></title>
	
	<!-- /////////// FAVICONS //////////// -->
	<!-- /////////// FAVICONS //////////// -->

		<link rel="apple-touch-icon" sizes="180x180" href="/assets/favicons/apple-touch-icon.png">
		<link rel="icon" type="image/png" sizes="32x32" href="/assets/favicons/favicon-32x32.png">
		<link rel="icon" type="image/png" sizes="16x16" href="/assets/favicons/favicon-16x16.png">
		<link rel="manifest" href="/assets/favicons/manifest.json">
		<link rel="mask-icon" href="/assets/favicons/safari-pinned-tab.svg" color="#000000">
		<link rel="shortcut icon" href="/assets/favicons/favicon.ico">
		<meta name="apple-mobile-web-app-title" content="pageTitle">
		<meta name="application-name" content="pageTitle">
		<meta name="msapplication-TileColor" content="#ffffff">
		<meta name="msapplication-TileImage" content="/assets/favicons/mstile-144x144.png">
		<meta name="msapplication-config" content="/assets/favicons/browserconfig.xml">
		<meta name="theme-color" content="#ffffff">
	
	<!-- /////////// PINGBACKS AND BASE URL //////////// -->
	<!-- /////////// PINGBACKS AND BASE URL //////////// -->

		<link href="http://gmpg.org/xfn/11" rel="profile">
		<link href="<?php echo($baseURL); ?>" rel="pingback">
		<link href="<?php echo($currentURL); ?>" rel="canonical" />
		<base href="<?php echo($baseURL); ?>">
	
	<!-- /////////// MODERNIZR //////////// -->
	<!-- /////////// MODERNIZR //////////// -->

		<script src="<?php echo($baseURL); ?>assets/js/libs/modernizr-custom.js<?php echo($verDate); ?>"></script>
		
	<!-- /////////// WEBFONT LOADER //////////// -->
	<!-- /////////// WEBFONT LOADER //////////// -->

		<script src="<?php echo($baseURL); ?>assets/js/libs/webfontloader.js<?php echo($verDate); ?>"></script>
		<script>
			WebFont.load({google:{
				families: ['Open Sans:400,700','Barlow Condensed:700','Source Code Pro:400,700','Merriweather:400,700']
			}});
		</script>
	
	<!-- /////////// CSS FILE //////////// -->
	<!-- /////////// CSS FILE //////////// -->
		
		<?php if(strpos($_SERVER[HTTP_HOST],'8888') !== false){ ?>
			<link href="<?php echo($baseURL); ?>assets/css/style.css" rel="stylesheet">
		<?php } else { ?>
			<link href="<?php echo($baseURL); ?>assets/css/style.min.css<?php echo($verDate); ?>" rel="stylesheet">
		<?php } ?>


	<!-- /////////// BASELINE META TAGS //////////// -->
	<!-- /////////// BASELINE META TAGS //////////// -->

		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
		<meta http-equiv="X-UA-Compatible" content="IE=9,chrome=1" />
		<meta name="description" content="<?php echo($pageDescription); ?>"/>
	
	<!-- /////////// SEARCH ENGINE DIRECTIONS //////////// -->
	<!-- /////////// SEARCH ENGINE DIRECTIONS //////////// -->

		<meta name="robots" content="index,follow,noodp"><!-- All Search Engines -->
		<meta name="googlebot" content="index,follow"><!-- Google Specific -->
		
	<!-- /////////// SUGGESTED OG TAGS //////////// -->
	<!-- /////////// SUGGESTED OG TAGS //////////// -->

		<meta property="og:title" content="<?php echo($pageTitle); ?>" />
		<meta property="og:description" content="<?php echo($pageDescription); ?>" />
		<meta property="og:url" content="<?php echo($currentURL); ?>" />
		<meta property="og:image" content="<?php echo($pageImage); ?>" />
		<meta property="og:locale" content="en_US" />
		<meta property="og:type" content="website" />
		<meta property="og:site_name" content="Obsidian Learning" />
	
	<!-- /////////// SUGESSTED TWITTER TAGS //////////// -->
	<!-- /////////// SUGESSTED TWITTER TAGS //////////// -->

		<meta name="twitter:title" content="<?php echo($pageTitle); ?>" />
		<meta name="twitter:description" content="<?php echo($pageDescription); ?>" />
		<meta name="twitter:image" content="<?php echo($pageImage); ?>" />
		<meta name="twitter:image:alt" content="<?php echo($pageTitle); ?>">
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:site" content="@obsidianlabs" />
		<meta name="twitter:creator" content="@obsidianlabs" />

	</head>
	
	<body id="<?php echo($bodyID); ?>" class="<?php echo($bodyClass); ?>">