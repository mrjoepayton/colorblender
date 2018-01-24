jQuery(document).ready(function($){

	// Thanks to Steve Champeon (hesketh.com) for explaining the math in such a way that I could 
	// understand it and create this tool
	// Thanks to Roberto Diez for the idea to create the "waterfall" display
	// Thanks to the Rhino book, I was able to (clumsily) set up the Color object
	//   v1.0 (20030213) initial release
	//   v1.1 (20030221) added rgbd and rgbp value types
	//   v1.2 (20030511) added "waterfall" display of "web-safe" colors
	//   v1.3 (20030514) single-page structure for easy local saves; CC license
	//   v1.4 (20150321) added URL fragment ID storing of colors, steps, type
	// v1.4.1 (20150322) fixed RGB/rgb parsing error

// ------------------------- SET OBJECTS ------------------------- //
// ------------------------- SET OBJECTS ------------------------- //

	var colorFields = $('.color-field');
		var colorFirst = $('#color-first');
		var colorLast = $('#color-last');

	var swatchNum = $('#swatchCount');

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

// ------------------------- FUNCTION init ------------------------- //
// ------------------------- FUNCTION init ------------------------- //

	function setFirstColor(theColor){
		Cookies.set('firstColor',theColor);
		colorFirst.val(theColor);
		swatchColor_1.css({'background-color':'#' + theColor});
	}

	function setLastColor(theColor){
		Cookies.set('lastColor',theColor);
		colorLast.val(theColor);
		swatchColor_11.css({'background-color':'#' + theColor});
	}

	if(!Cookies.get('firstColor')){
		Cookies.set('firstColor','FFFFFF');
	}
	
	if(!Cookies.get('lastColor')){
		Cookies.set('lastColor','000000');
	}

	if(!Cookies.get('swatchCount')){
		Cookies.set('swatchCount', '1');
	}

	setFirstColor(Cookies.get('firstColor'));
	setLastColor(Cookies.get('lastColor'));
	
	swatchNum.val(Cookies.get('swatchCount'));

	colorFirst.on('blur',function(){
		newColor = colorFirst.val();
		setFirstColor(newColor);
	});

	colorLast.on('blur',function(){
		newColor = colorLast.val();
		setLastColor(newColor);
	});

	swatchNum.on('change blur', function(){
		newCount = swatchNum.val();
		Cookies.set('swatchCount', newCount);
	});

});