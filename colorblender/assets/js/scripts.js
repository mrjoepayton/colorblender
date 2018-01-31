jQuery(document).ready(function($){

// ------------------------- SET OBJECTS ------------------------- //
// ------------------------- SET OBJECTS ------------------------- //

	var notificationBar = $('#notifications');
		var notificationValue = $('#notifications .val');
		var hideBar;

	var colorFields = $('.color-field');
		var colorFirst = $('#color-first');
		var colorLast = $('#color-last');

	var swatchNum = $('#swatchCount');

	var hide1swatches = $('#swatch-2,#swatch-3,#swatch-4,#swatch-5,#swatch-7,#swatch-8,#swatch-9,#swatch-10');
	var show1swatches = $('#swatch-6');

	var hide3swatches = $('#swatch-2,#swatch-3,#swatch-4,#swatch-8,#swatch-9,#swatch-10');
	var show3swatches = $('#swatch-5,#swatch-6,#swatch-7');

	var hide5swatches = $('#swatch-2,#swatch-3,#swatch-9,#swatch-10');
	var show5swatches = $('#swatch-4,#swatch-5,#swatch-6,#swatch-7,#swatch-8');

	var hide7swatches = $('#swatch-2,#swatch-10');
	var show7swatches = $('#swatch-3,#swatch-4,#swatch-5,#swatch-6,#swatch-7,#swatch-8,#swatch-9');

	var show9swatches = $('#swatch-2,#swatch-3,#swatch-4,#swatch-5,#swatch-6,#swatch-7,#swatch-8,#swatch-9,#swatch-10');

	var allSwatches = $('#swatches .swatch');
		var swatchColor_1 = $('#swatch-1 .color');
		var swatchColor_2 = $('#swatch-2 .color');
		var swatchColor_3 = $('#swatch-3 .color');
		var swatchColor_4 = $('#swatch-4 .color');
		var swatchColor_5 = $('#swatch-5 .color');
		var swatchColor_6 = $('#swatch-6 .color');
		var swatchColor_7 = $('#swatch-7 .color');
		var swatchColor_8 = $('#swatch-8 .color');
		var swatchColor_9 = $('#swatch-9 .color');
		var swatchColor_10 = $('#swatch-10 .color');
		var swatchColor_11 = $('#swatch-11 .color');

// ------------------------- INITIALIZE THE COMPONENTS ------------------------- //
// ------------------------- INITIALIZE THE COMPONENTS ------------------------- //

	if(!Cookies.get('firstColor')){
		Cookies.set('firstColor','2F95CE');
	}
	
	if(!Cookies.get('lastColor')){
		Cookies.set('lastColor','45C404');
	}

	if(!Cookies.get('swatchCount')){
		Cookies.set('swatchCount', '5');
	}

	setFirstColor(Cookies.get('firstColor'));
	setLastColor(Cookies.get('lastColor'));
	setSwatchViews(Cookies.get('swatchCount'));

	var hexClipboard = new Clipboard('.hex .code-wrap');
	var rgbClipboard = new Clipboard('.rgb .code-wrap');

	hexClipboard.on('success', function(e) {
		if(hideBar){ window.clearTimeout(hideBar); }

		notificationValue.text(e.text);
		notificationBar.addClass("is-showing");
		
		hideBar = window.setTimeout(function(){ notificationBar.removeClass("is-showing"); },3000);
	});

	rgbClipboard.on('success', function(e) {
	    if(hideBar){ window.clearTimeout(hideBar); }

		notificationValue.text(e.text);
		notificationBar.addClass("is-showing");
		
		hideBar = window.setTimeout(function(){ notificationBar.removeClass("is-showing"); },3000);
	});

// ------------------------- FUNCTION TO CONVERT HEX TO RGB hexToRgb(hex) ------------------------- //
// ------------------------- FUNCTION TO CONVERT HEX TO RGB hexToRgb(hex) ------------------------- //

	function hexToRgb(hex) {
		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})|([a-f\d]{1})([a-f\d]{1})([a-f\d]{1})$/i.exec(hex);
		return result ? {        
			r: parseInt(hex.length <= 4 ? result[4]+result[4] : result[1], 16),
			g: parseInt(hex.length <= 4 ? result[5]+result[5] : result[2], 16),
			b: parseInt(hex.length <= 4 ? result[6]+result[6] : result[3], 16),
			toString: function() {
				var arr = [];
				arr.push(this.r);
				arr.push(this.g);
				arr.push(this.b);
				return "rgb(" + arr.join(",") + ")";
			}
		} : null;
	}

// ------------------------- SET THE FIRST COLOR setFirstColor(theColor) ------------------------- //
// ------------------------- SET THE FIRST COLOR setFirstColor(theColor) ------------------------- //

	function setFirstColor(color1){
		Cookies.set('firstColor',color1);
		theRGBColor = hexToRgb(color1);

		colorFirst.val(color1);
		swatchColor_1.css({'background-color':'#' + color1});
		
		$('#swatch-1 .color .info').removeClass().addClass( "info " + getContrastYIQ(color1) );
		
		$('#swatch-1 .hex .code-wrap').attr('data-clipboard-text','#' + color1);
		$('#swatch-1 .hex .code-wrap .code').text('#' + color1);

		$('#swatch-1 .rgb .code-wrap').attr('data-clipboard-text',theRGBColor);
		$('#swatch-1 .rgb .code-wrap .code').text(theRGBColor);

		setColors();
	}

// ------------------------- SET THE LAST COLOR setLastColor(theColor) ------------------------- //
// ------------------------- SET THE LAST COLOR setLastColor(theColor) ------------------------- //

	function setLastColor(color2){
		Cookies.set('lastColor',color2);
		theRGBColor = hexToRgb(color2);

		colorLast.val(color2);
		swatchColor_11.css({'background-color':'#' + color2});

		$('#swatch-11 .color .info').removeClass().addClass( "info " +  getContrastYIQ(color2) );

		$('#swatch-11 .hex .code-wrap').attr('data-clipboard-text','#' + color2);
		$('#swatch-11 .hex .code-wrap .code').text('#' + color2);

		$('#swatch-11 .rgb .code-wrap').attr('data-clipboard-text',theRGBColor);
		$('#swatch-11 .rgb .code-wrap .code').text(theRGBColor);

		setColors();
	}

// ------------------------- SET THE VIEWABLE SWATCHES setSwatchViews(sc) ------------------------- //
// ------------------------- SET THE VIEWABLE SWATCHES setSwatchViews(sc) ------------------------- //

	function setSwatchViews(sc) {

		swatchNum.val(sc);

		if(sc == "1"){
			hide1swatches.hide();
			show1swatches.show();
			setColors();
		}

		if(sc == "3"){
			hide3swatches.hide();
			show3swatches.show();
			setColors();
		}

		if(sc == "5"){
			hide5swatches.hide();
			show5swatches.show();
			setColors();
		}

		if(sc == "7"){
			hide7swatches.hide();
			show7swatches.show();
			setColors();
		}

		if(sc == "9"){
			show9swatches.show();
			setColors();
		}

	}

	function setLogoColors(){

		color1 = Cookies.get('firstColor');
		color2 = Cookies.get('lastColor');

		$('#main-logo #letter-1').css({'fill': color1});
		$('#main-logo #letter-12').css({'fill': color2});

		start = 2;
		end = 11;
		intDif = 1/11;

		for (var i = start; i <= end; i++) {
			colorPoint = ((i-start)+1)*intDif;
			newBGColor = blend_colors(color1,color2,colorPoint);
			$('#main-logo #letter-' + i).css({'fill': newBGColor});
		}

	}

// ------------------------- FUNCTION TO SET COLORS setColors() ------------------------- //
// ------------------------- FUNCTION TO SET COLORS setColors() ------------------------- //

	function setColors() {

		color1 = Cookies.get('firstColor');
		color2 = Cookies.get('lastColor');

		switch (Cookies.get('swatchCount')) {

		// ----- if swatch count is 1
			case '1':
				start = 6;
				end = 6;
				intDif = 1/2;
			break;

		// ----- if swatch count is 3
			case '3':
				start = 5;
				end = 7;
				intDif = 1/4;
			break;

		// ----- if swatch count is 5
			case '5':
				start = 4;
				end = 8;
				intDif = 1/6;
			break;

		// ----- if swatch count is 7
			case '7':
				start = 3;
				end = 9;
				intDif = 1/8;
			break;

		// ----- if swatch count is 9
			case '9':
				start = 2;
				end = 10;
				intDif = 1/10;
			break;

		// ----- if swatch count is not set
			default:
				start = 2;
				end = 10;
				intDif = 1/10;
		}

		for (var i = start; i <= end; i++) {
			
			colorPoint = ((i-start)+1)*intDif;
			newHexColor = blend_colors(color1,color2,colorPoint);
			newRGBColor = hexToRgb(newHexColor);
			
			thisBlock = $('#swatch-' + i);

			// SET THE BG COLOR
			thisBlock.find('.color').css({'background-color': newHexColor});

			//SET THE CONTRASTING COLOR FOR THE TEXT
			thisBlock.find('.info').removeClass().addClass( "info " +  getContrastYIQ(newHexColor.substr(1)) );

			// insert the text data into color blocks
			thisBlock.find('.hex .hex-code').text(newHexColor);
			thisBlock.find('.hex .code-wrap').attr('data-clipboard-text',newHexColor);
			
			thisBlock.find('.rgb .rgb-code').text(newRGBColor)
			thisBlock.find('.rgb .code-wrap').attr('data-clipboard-text',newRGBColor);

		}

		setLogoColors();

	}

// ------------------------- FUNCTION TO BLEND THE COLORS blend_colors(color1, color2, percentage) ------------------------- //
// ------------------------- FUNCTION TO BLEND THE COLORS blend_colors(color1, color2, percentage) ------------------------- //

	function blend_colors(color1, color2, percentage) {

	    // check input
	    color1 = '#' + color1 || '#000000';
	    color2 = '#' + color2 || '#ffffff';
	    percentage = percentage || 0.5;

	    // 1: validate input, make sure we have provided a valid hex
	    if (color1.length != 4 && color1.length != 7)
	        throw new error('colors must be provided as hexes');

	    if (color2.length != 4 && color2.length != 7)
	        throw new error('colors must be provided as hexes');    

	    if (percentage > 1 || percentage < 0)
	        throw new error('percentage must be between 0 and 1');

	    // 2: check to see if we need to convert 3 char hex to 6 char hex, else slice off hash
	    //      the three character hex is just a representation of the 6 hex where each character is repeated
	    //      ie: #060 => #006600 (green)
	    if (color1.length == 4)
	        color1 = color1[1] + color1[1] + color1[2] + color1[2] + color1[3] + color1[3];
	    else
	        color1 = color1.substring(1);
	    if (color2.length == 4)
	        color2 = color2[1] + color2[1] + color2[2] + color2[2] + color2[3] + color2[3];
	    else
	        color2 = color2.substring(1);   

	    // 3: we have valid input, convert colors to rgb
	    color1 = [parseInt(color1[0] + color1[1], 16), parseInt(color1[2] + color1[3], 16), parseInt(color1[4] + color1[5], 16)];
	    color2 = [parseInt(color2[0] + color2[1], 16), parseInt(color2[2] + color2[3], 16), parseInt(color2[4] + color2[5], 16)];

	    // 4: blend
	    var color3 = [ 
	        (1 - percentage) * color1[0] + percentage * color2[0], 
	        (1 - percentage) * color1[1] + percentage * color2[1], 
	        (1 - percentage) * color1[2] + percentage * color2[2]
	    ];

	    // 5: convert to hex
	    color3 = '#' + int_to_hex(color3[0]) + int_to_hex(color3[1]) + int_to_hex(color3[2]);

	    // return hex
	    return color3;
	}

// ------------------------- FUNCTION TO TURN RGB INTEGER TO HEX int_to_hex(num) ------------------------- //
// ------------------------- FUNCTION TO TURN RGB INTEGER TO HEX int_to_hex(num) ------------------------- //

	function int_to_hex(num){
	    var hex = Math.round(num).toString(16);
	    if (hex.length == 1)
	        hex = '0' + hex;
	    return hex;
	}

// ------------------------- GET THE CONTRASTING COLOR ------------------------- //
// ------------------------- GET THE CONTRASTING COLOR ------------------------- //

	function getContrastYIQ(hexcolor){
	    var r = parseInt(hexcolor.substr(0,2),16);
	    var g = parseInt(hexcolor.substr(2,2),16);
	    var b = parseInt(hexcolor.substr(4,2),16);
	    var yiq = ((r*299)+(g*587)+(b*114))/1000;
	    return (yiq >= 128) ? 'black' : 'white';
	}

// ------------------------- WHEN CHANGING THE FIRST COLOR ------------------------- //
// ------------------------- WHEN CHANGING THE FIRST COLOR ------------------------- //

	colorFirst.on('blur',function(){
		newColor = colorFirst.val();
		newColor = newColor.replace(/[^\w\s]/gi, '');
		colorFirst.val(newColor);
		setFirstColor(newColor);
	});

// ------------------------- WHEN CHANGING THE LAST COLOR ------------------------- //
// ------------------------- WHEN CHANGING THE LAST COLOR ------------------------- //

	colorLast.on('blur',function(){
		newColor = colorLast.val();
		newColor = newColor.replace(/[^\w\s]/gi, '');
		colorLast.val(newColor);
		setLastColor(newColor);
	});

// ------------------------- WHEN CHANGING THE NUMBER OF SWATCHES ------------------------- //
// ------------------------- WHEN CHANGING THE NUMBER OF SWATCHES ------------------------- //

	swatchNum.on('change blur', function(){
		newCount = swatchNum.val();
		Cookies.set('swatchCount', newCount);
		setSwatchViews(newCount);
	});

});