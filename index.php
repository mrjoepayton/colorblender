<?php
	
include($_SERVER['DOCUMENT_ROOT'].'/inc/global.php');

$pageTitle = "Color Blender";
$pageDescription = "Color Blender rebuild of Eric Meyer's color blend tool [ https://meyerweb.com/eric/tools/color-blend/ ]";
$currentURL = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
$pageImage = "https://spacecity.us/assets/img/spacecity.jpg";

$bodyID = "homepage";
$bodyClass = "home";

?>

<?php include($_SERVER['DOCUMENT_ROOT'].'/inc/head.php'); ?>
<?php include($_SERVER['DOCUMENT_ROOT'].'/inc/header.php'); ?>

<div id="input-block" class="container">
	
	<div class="row">

		<div id="first-color-col" class="col-2">
			
			<div class="input-group">
				<div class="input-group-prepend">
					<div class="input-group-text">#</div>
				</div>
				<input type="text" class="color-field form-control" id="color-first" placeholder="FFFFFF">
			</div>

		</div>

		<div id="swatch-count-col" class="col-4">
			<h3 class="title">Number of Swatches</h3>
			<select id="swatchCount">
				<option value="1" selected>1</option>
				<option value="3">3</option>
				<option value="5">5</option>
				<option value="7">7</option>
				<option value="9">9</option>
			</select>

		</div>

		<div id="last-color-col" class="col-2">

			<div class="input-group">
				<div class="input-group-prepend">
					<div class="input-group-text">#</div>
				</div>
				<input type="text" class="color-field form-control" id="color-last" placeholder="000000">
			</div>

		</div>

	</div>

</div>

<div id="output-block" class="container">
	
	<div id="swatches" class="row">

		<div id="swatch-1" class="col">
			<div class="color">
				<div class="ar-content"></div>
			</div>
		</div>

		<div id="swatch-2" class="col">
			<div class="color">
				<div class="ar-content"></div>
			</div>
		</div>

		<div id="swatch-3" class="col">
			<div class="color">
				<div class="ar-content"></div>
			</div>
		</div>

		<div id="swatch-4" class="col">
			<div class="color">
				<div class="ar-content"></div>
			</div>
		</div>

		<div id="swatch-5" class="col">
			<div class="color">
				<div class="ar-content"></div>
			</div>
		</div>

		<div id="swatch-6" class="col">
			<div class="color">
				<div class="ar-content"></div>
			</div>
		</div>

		<div id="swatch-7" class="col">
			<div class="color">
				<div class="ar-content"></div>
			</div>
		</div>

		<div id="swatch-8" class="col">
			<div class="color">
				<div class="ar-content"></div>
			</div>
		</div>

		<div id="swatch-9" class="col">
			<div class="color">
				<div class="ar-content"></div>
			</div>
		</div>

		<div id="swatch-10" class="col">
			<div class="color">
				<div class="ar-content"></div>
			</div>
		</div>

		<div id="swatch-11" class="col">
			<div class="color">
				<div class="ar-content"></div>
			</div>
		</div>

	
	</div>

</div>

<?php include($_SERVER['DOCUMENT_ROOT'].'/inc/footer.php'); ?>