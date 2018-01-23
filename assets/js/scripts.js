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

	var colorBlenderForm = $('#colorblender-form');
	var colorGrid = $('#colors-table');
	var colorsTable = "";

	var formatBtns = $('[rel="format-btn"]');

	var color1 = $('#col0');
	var color2 = $('#col1');

	var stepsSelect = $('#steps');

	var base = 16;
	var colors = new Array('00','33','66','99','CC','FF');
	var colType = 'hex';
	var cursor = 0;
	var ends = new Array(new Color,new Color);
	var palette = new Array(new Color,new Color,new Color,new Color,new Color,new Color,new Color,new Color,new Color,new Color,new Color,new Color);
	var step = new Array(3);

// ------------------------- INITIALIZE PAGE ------------------------- //
// ------------------------- INITIALIZE PAGE ------------------------- //

	init('hex');

	colorBlenderForm.on('submit',function(e){
		e.preventDefault();
	});

	color1.on('blur',function(e){
		colorStore('0');
	});

// ------------------------- FUNCTION Color ------------------------- //
// ------------------------- FUNCTION Color ------------------------- //

	function Color(r,g,b) {
		this.r = r;
		this.g = g;
		this.b = b;
		this.coll = new Array(r,g,b);
		this.valid = cVerify(this.coll);
		this.text = cText(this.coll);
		this.bg = cText(this.coll);
	}

// ------------------------- FUNCTION cVerify ------------------------- //
// ------------------------- FUNCTION cVerify ------------------------- //

	function cVerify(c) {
		var valid = 'n';
		
		if ((!isNaN(c[0])) && (!isNaN(c[1])) && (!isNaN(c[2]))) {
			valid = 'y'
		}
		
		return valid;

	}

// ------------------------- FUNCTION cText ------------------------- //
// ------------------------- FUNCTION cText ------------------------- //

	function cText(c,t) {
		
		var result = '';
		var d = 1;

		if (t) {
			var cT = t;
		} else {
			var cT = colType;
		}

		if (cT == 'hex'){
			var base = 16;
		}

		if (cT == 'rgbp') {
			d = 2.55
		}
		
		for (k = 0; k < 3; k++) {

			val = Math.round(c[k]/d);
			piece = val.toString(base);
			
			if (cT == 'hex' && piece.length < 2) {
				piece = '0' + piece;
			}

			if (cT == 'rgbp') {
				piece = piece + '%';
			}

			if (cT != 'hex' && k < 2) {
				piece = piece + ',';
			}
			
			result = result + piece;

		}

		if (cT == 'hex') {
			result = '#' + result.toUpperCase();
		} else {
			result = 'rgb(' + result + ')';
		}
		
		return result;

	}

// ------------------------- FUNCTION colorParse ------------------------- //
// ------------------------- FUNCTION colorParse ------------------------- //

	function colorParse(c,t) {

		var m = 1;
		c = c.toUpperCase();
		col = c.replace('RGB','').replace(/[\#\(]*/i,'');

		if (t == 'hex') {
		
			if (col.length == 3) {
				a = col.substr(0,1);
				b = col.substr(1,1);
				c = col.substr(2,1);
				col = a + a + b + b + c + c;
			}

			var num = new Array(col.substr(0,2),col.substr(2,2),col.substr(4,2));
			var base = 16;

		} else {

			var num = col.split(',');
			var base = 10;

		}

		if (t == 'rgbp') {
			m = 2.55
		}
		
		var ret = new Array(parseInt(num[0],base)*m,parseInt(num[1],base)*m,parseInt(num[2],base)*m);

		return(ret);
	}

// ------------------------- FUNCTION updateHash ------------------------- //
// ------------------------- FUNCTION updateHash ------------------------- //

	function updateHash() {

		if (ends[0].valid == 'y') {
			c0 = cText(ends[0].coll,'hex').substring(1);
		} else {
			c0 = '';
		}

		if (ends[1].valid == 'y') {
			c1 = cText(ends[1].coll,'hex').substring(1);
		} else {
			c1 = '';
		}

		st = stepsSelect.val();
		obj = $('a.coltype');
		ty = obj[0].id;
		hashstr = '#' + c0 + ':' + c1 + ':' + st + ':' + ty;
		window.location.hash = hashstr;

	}

// ------------------------- FUNCTION colorPour ------------------------- //
// ------------------------- FUNCTION colorPour ------------------------- //

	function colorPour(pt,n) {

		var textObj = $('#' + pt + n);
		var colObj = $('#' + pt.substring(0,1) + n);

		if (pt == 'col') {
			temp = ends[n]
		} else {
			temp = palette[n]
		}
		
		if (temp.valid == 'y') {
			textObj.val(temp.text());
			colObj.css({"background-color":temp.bg});
		}
	}

// ------------------------- FUNCTION colorStore ------------------------- //
// ------------------------- FUNCTION colorStore ------------------------- //

	function colorStore(n) {

		var inCol = $('#col'+n).val();
		var c = colorParse(inCol,colType);
		
		ends[n] = new Color(c[0],c[1],c[2]);
		
		if (ends[n].valid == 'y') {
			colorPour('col',n)
		}

	}

// ------------------------- FUNCTION stepCalc ------------------------- //
// ------------------------- FUNCTION stepCalc ------------------------- //

	function stepCalc() {
		var steps = parseInt(stepsSelect.val()) + 1;
		step[0] = (ends[1].r - ends[0].r) / steps;
		step[1] = (ends[1].g - ends[0].g) / steps;
		step[2] = (ends[1].b - ends[0].b) / steps;
	}

// ------------------------- FUNCTION mixPalette ------------------------- //
// ------------------------- FUNCTION mixPalette ------------------------- //

	function mixPalette() {
		var steps = parseInt(stepsSelect.val());
		var count = steps + 1;
		palette[0] = new Color(ends[0].r,ends[0].g,ends[0].b);
		palette[count] = new Color(ends[1].r,ends[1].g,ends[1].b);

		for (i = 1; i < count; i++) {
			var r = (ends[0].r + (step[0] * i));
			var g = (ends[0].g + (step[1] * i));
			var b = (ends[0].b + (step[2] * i));
				palette[i] = new Color(r,g,b);
		}
		
		for (j = count + 1; j < 12; j++) {
			palette[j].text = '';
			palette[j].bg = 'white';
		}

	}

// ------------------------- FUNCTION drawPalette ------------------------- //
// ------------------------- FUNCTION drawPalette ------------------------- //

	function drawPalette() {
		stepCalc();
		mixPalette();
		for (i = 0; i < 12; i++) {
			colorPour('pal',i);
		}		
		updateHash();
	}

// ------------------------- FUNCTION colorIns ------------------------- //
// ------------------------- FUNCTION colorIns ------------------------- //

	function colorIns(c) {
		var obj = $('#col' + cursor);
		var result = colorParse(c,'hex');
		ends[cursor] = new Color(result[0],result[1],result[2]);
		obj.value = ends[cursor].text;
		if (ends[cursor].valid == 'y') {colorPour('col',cursor)}
		updateHash();
	}

// ------------------------- FUNCTION setType ------------------------- //
// ------------------------- FUNCTION setType ------------------------- //

	function setType(inp) {
		colType = inp;
		if (inp == 'hex') {base = 16;} else {base = 10;}
		for (i = 0; i < 2; i++) {
			var obj = document.getElementById('col' + i);
			if (ends[i].valid == 'y') {
				ends[i] = new Color(ends[i].r,ends[i].g,ends[i].b);
				obj.value = ends[i].text;
			}
		}
		$('#hex').removeClass();
		$('#rgbd').removeClass();
		$('#rgbp').removeClass();
		$('#' + inp).addClass('coltype');	
		drawPalette();
	}

// ------------------------- FUNCTION hashChange ------------------------- //
// ------------------------- FUNCTION hashChange ------------------------- //

	function hashChange() {
		init(1);
	}

// ------------------------- FUNCTION init ------------------------- //
// ------------------------- FUNCTION init ------------------------- //

	function init(inp) {

		stepsSelect.val('0');

		if (!inp) {
			obj = $('a.coltype');
			inp = obj[0].id;
			window.location.hash = '::1:' + colType;
		}
		
		for (i = 0; i < 2; i++) {
			ends[i] = new Color;
			$('#col'+i).val('');
			$('#c'+i).css({'background-color':'white'});
		}
		
		for (j = 0; j < 12; j++) {
			palette[j] = new Color;
			$('#pal'+j).val('');
			$('p'+j).css({'background-color':'white'});
		}

		$('#col0').focus();

		if (window.location.hash) {
		
			hash = window.location.hash.substring(1);
		
			vals = hash.split(":");
		
			if (vals[0]) {
				$('#col0').val(vals[0]);
				colorStore('0');
			}
			if (vals[1]) {
				$('#col1').val(vals[1]);
				colorStore('1');
			}

			stepsSelect.val(vals[2]);

			inp = vals[3];

			if (vals[0] && vals[1]){
				drawPalette();
			}

		}

		setType(inp);

	}

});