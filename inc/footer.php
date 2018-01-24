	<footer id="main-footer">
				
		<div class="container">
			<div class="row">
				
				<div class="col">
					This color blender tool was inspired by <a href="https://meyerweb.com/eric/tools/color-blend/" target="_blank" rel="noopener">Eric Meyer&rsquo;s Color Blender tool</a>. Thanks for the inspiration.
				</div>
				
			</div>
		</div>
		
	</footer>
		
		<?php if(strpos($_SERVER[HTTP_HOST],'8888') !== false){ ?>

			<script type='text/javascript' src="/assets/js/plugins.js"></script>
			<script type='text/javascript' src="/assets/js/scripts.js"></script>

		<?php } else { ?>
			
			<script type='text/javascript' src="/assets/js/plugins.min.js"></script>
			<script type='text/javascript' src="/assets/js/scripts.min.js"></script>

		<?php } ?>


	</body>
	
</html>