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

	var colorGrid = $('#colors-table');
	var colorsTable = "";

	var formatBtns = $('[rel="format-btn"]');

	var colorFields = $('.color-field');
		var color1 = $('#color_1 .color-field');
		var color1Box = $('#color_1 .color-square');

		var color2 = $('#color_2 .color-field');
		var color2Box = $('#color_2 .color-square');

	var stepsSelect = $('#steps');

	var blendBtn = $('#blend-btn');
	var clearBtn = $('#clear-btn');

// ------------------------- FUNCTION init ------------------------- //
// ------------------------- FUNCTION init ------------------------- //

	if(!Cookies.get('colorA')){
		Cookies.set('colorA','FFFFFF');
	}
	
	if(!Cookies.get('colorB')){
		Cookies.set('colorB','CCCCCC');
	}

	if(!Cookies.get('swatchCount')){
		Cookies.set('swatchCount', '5');
	}

	color1.val("#" + Cookies.get('colorA'));
	color1Box.css({'background-color':'#' + Cookies.get('colorA')});
	
	color2.val("#" + Cookies.get('colorB'));
	color2Box.css({'background-color':'#' + Cookies.get('colorB')});

	stepsSelect.val(Cookies.get('swatchCount'));

});