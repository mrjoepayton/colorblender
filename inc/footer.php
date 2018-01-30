	<footer id="main-footer">
				
		<div class="container">
			
			<div class="row">
				
				<div class="col-12 col-sm-11">
					
					<div id="created">
					This color blender tool was created by <a href="https://spacecityvanity.com/">Space City Vanity</a> &copy; <?php echo( date('Y') );?>
					</div>
					
					<div id="inspired">
						 Inspired by <a href="https://meyerweb.com/eric/tools/color-blend/" target="_blank" rel="noopener">Eric Meyer&rsquo;s Color Blender tool</a>. Thank you!
					</div>

				</div>

				<div id="foot-logo-wrap" class="col-12 col-sm-1">
					<a href="https://spacecityvanity.com/"><?php echo(file_get_contents($baseDIR.'/assets/img/foot-logo.svg')); ?></a>
				</div>
				
			</div>
		</div>
		
	</footer>
		
		<?php if(strpos($_SERVER['HTTP_HOST'],'8888') !== false){ ?>

			<script type='text/javascript' src="<?php echo($baseURL); ?>assets/js/plugins.js"></script>
			<script type='text/javascript' src="<?php echo($baseURL); ?>assets/js/scripts.js"></script>

		<?php } else { ?>
			
			<script type='text/javascript' src="<?php echo($baseURL); ?>assets/js/plugins.min.js"></script>
			<script type='text/javascript' src="<?php echo($baseURL); ?>assets/js/scripts.min.js"></script>

			<!-- Global site tag (gtag.js) - Google Analytics -->
			<script async src="https://www.googletagmanager.com/gtag/js?id=UA-113310791-2"></script>
			<script>
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());

				gtag('config', 'UA-113310791-2');
			</script>

		<?php } ?>


	</body>
	
</html>