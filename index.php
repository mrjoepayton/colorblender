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

		<div id="input-block" class="col-4">

				<div id="first-color-col">
					
					<div class="input-group">
						<div class="input-group-prepend">
							<div class="input-group-text">#</div>
						</div>
						<input type="text" class="color-field form-control" id="color-first" placeholder="FFFFFF">
					</div>

				</div>

				<div id="swatch-count-col">
					<h3 class="title">Number of Swatches</h3>
					<select id="swatchCount">
						<option value="1" selected>3</option>
						<option value="3">5</option>
						<option value="5">7</option>
						<option value="7">9</option>
						<option value="9">11</option>
					</select>

				</div>

				<div id="last-color-col">

					<div class="input-group">
						<div class="input-group-prepend">
							<div class="input-group-text">#</div>
						</div>
						<input type="text" class="color-field form-control" id="color-last" placeholder="000000">
					</div>

				</div>

		</div> <!-- close "input-block" -->

		<div id="output-block" class="col-8">
			
			<div id="swatches">

				<div id="swatch-1" class="col swatch">
					
					<div class="color">
						<div class="ar-content">
							
						</div>
					</div>
				</div>

				<div id="swatch-2" class="col swatch">
					<div class="color">
						<div class="ar-content">
							
						</div>
					</div>
				</div>

				<div id="swatch-3" class="col swatch">
					<div class="color">
						<div class="ar-content"></div>
					</div>
				</div>

				<div id="swatch-4" class="col swatch">
					<div class="color">
						<div class="ar-content"></div>
					</div>
				</div>

				<div id="swatch-5" class="col swatch">
					<div class="color">
						<div class="ar-content"></div>
					</div>
				</div>

				<div id="swatch-6" class="col swatch">
					<div class="color">
						<div class="ar-content">
							
							<div class="info">
								<div class="hex">
									<strong class="title">HEX</strong>
									<div class="code-wrap" data-clipboard-text="">
										<span class="hex-code code"></span>
										<span class="clipboard-btn"><?php echo(file_get_contents($baseDIR.'/assets/img/clipboard.svg')); ?></span>
									</div>
								</div>
								<div class="rgb">
									<strong class="title">RGB</strong>
									<div class="code-wrap" data-clipboard-text="">
										<span class="rgb-code code"></span>
										<span class="clipboard-btn"><?php echo(file_get_contents($baseDIR.'/assets/img/clipboard.svg')); ?></span>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

				<div id="swatch-7" class="col swatch">
					<div class="color">
						<div class="ar-content"></div>
					</div>
				</div>

				<div id="swatch-8" class="col swatch">
					<div class="color">
						<div class="ar-content"></div>
					</div>
				</div>

				<div id="swatch-9" class="col swatch">
					<div class="color">
						<div class="ar-content"></div>
					</div>
				</div>

				<div id="swatch-10" class="col swatch">
					<div class="color">
						<div class="ar-content"></div>
					</div>
				</div>

				<div id="swatch-11" class="col swatch">
					<div class="color">
						<div class="ar-content"></div>
					</div>
				</div>
			
			</div>

		</div> <!-- close "output-block" -->

	</div> <!-- close "row" -->

</div> <!-- close "container" -->

<?php include($_SERVER['DOCUMENT_ROOT'].'/inc/footer.php'); ?>