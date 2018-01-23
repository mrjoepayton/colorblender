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

<div class="container">
	
	<div class="row">
		
		<div id="uicell" class="col8">
		
			<h2>Format</h2>
			<a onclick="setType('hex');" id="hex" class="coltype">Hex</a>
			<a onclick="setType('rgbd');" id="rgbd">RGB</a>
			<a onclick="setType('rgbp');" id="rgbp">RGB%</a>


			<h2 id="l1">Color 1</h2>
			<input type="text" id="col0" size="19" onblur="colorStore('0');" />

			<h2 id="l2">Color 2</h2>
			<input type="text" id="col1" size="19" onblur="colorStore('1');" />

			<h2>Midpoints</h2>
			<select id="steps" onchange="updateHash();">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
				<option value="10">10</option>
			</select>

			<div id="gobuttons">
				<a onclick="drawPalette();">blend</a>
				<a onclick="init(0);">clear</a>
			</div>

		</div>

		<div id="output" class="col-4">
			
			<h2>Palette</h2>

			<input type="text" id="pal0" size="19" />
			<div class="pal" id="p0">&nbsp;</div>

			<input type="text" id="pal1" size="19" />
			<div class="pal" id="p1">&nbsp;</div>

			<input type="text" id="pal2" size="19" />
			<div class="pal" id="p2">&nbsp;</div>

			<input type="text" id="pal3" size="19" />
			<div class="pal" id="p3">&nbsp;</div>

			<input type="text" id="pal4" size="19" />
			<div class="pal" id="p4">&nbsp;</div>

			<input type="text" id="pal5" size="19" />
			<div class="pal" id="p5">&nbsp;</div>

			<input type="text" id="pal6" size="19" />
			<div class="pal" id="p6">&nbsp;</div>

			<input type="text" id="pal7" size="19" />
			<div class="pal" id="p7">&nbsp;</div>

			<input type="text" id="pal8" size="19" />
			<div class="pal" id="p8">&nbsp;</div>

			<input type="text" id="pal9" size="19" />
			<div class="pal" id="p9">&nbsp;</div>

			<input type="text" id="pal10" size="19" />
			<div class="pal" id="p10">&nbsp;</div>

			<input type="text" id="pal11" size="19" />
			<div class="pal" id="p11">&nbsp;</div>

		</div>

		<div class="col-12">

			<ul>
				<li>
				Pick a color value format, input two <strong>valid</strong> CSS color values in the format you chose, and pick the number of midpoints you'd like to see.  The palette will show the colors you input as well as the requested number of midpoint colors, and the values of those colors.</li>
				<li>All numbers are rounded to the nearest integer.</li>
				<li>Clicking on a square in the "waterfall" display will fill in the appropriate value for whichever input is highlighted.</li>
				<li>Switching between value formats will translate whatever values are in place.</li>
				<li>"Clear" removes all values and colors, but does not change the current value format.</li>
				<li>The URL of the page is updated with each change so you can share or bookmark the colors, blend steps, and value format currently shown.</li>
				<li>If you'd like to have the Color Blender for offline use, just view source and save to your hard drive.</li>
			</ul>

		</div>
	
	</div>

</div>

<?php include($_SERVER['DOCUMENT_ROOT'].'/inc/footer.php'); ?>