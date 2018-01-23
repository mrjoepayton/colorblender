	<footer id="main-footer">
				
		<div class="container">
			
			<div class="row">
				
				<div class="col-2">
					<img alt="Creative Commons License" border="0" src="http://creativecommons.org/images/public/somerights.gif">
				</div>

				<div class="col-10">
					The Color Blender is licensed under a Creative Commons <a href="http://creativecommons.org/licenses/by-sa/1.0/" rel="license">Attribution-ShareAlike 1.0</a> License.
				</div>
				
				<div class="col-12">
					This tool is provided without warranty, guarantee, or much in the way of explanation.  Note that use of this tool may or may not crash your browser, lock up your machine, erase your hard drive, or e-mail those naughty pictures you hid in the Utilities folder to your mother.  Don't blame me if anything bad happens to you, because it's actually the aliens' fault.  The code expressed herein is solely that of the author, and he's none too swift with the JavaScript, if you know what we mean, so it's likely to cause giggle fits in anyone who knows what they're doing.  Not a flying toy.  Thank you for playing.  Insert coin to continue.
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