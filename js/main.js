var calculate = function(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var feed, tech, design = false;

$('#hamclick').click(function() {
	if(feed) {
		$('.content-section').show()
		feed = false;
	}
	else {
		$('.content-section').hide()
		feed = true;
	}
})

$('#techclick').click(function() {
	if(tech) {
		$('.tech').show()
		tech = false;
		$('#techclick').css({
	     '-moz-transform':'rotate(0deg)',
	     '-webkit-transform':'rotate(0deg)',
	     '-o-transform':'rotate(0deg)',
	     '-ms-transform':'rotate(0deg)',
	     'transform':'rotate(0deg)'
		});
	}
	else {
		$('.tech').hide()
		tech = true;
		$('#techclick').css({
	     '-moz-transform':'rotate(-90deg)',
	     '-webkit-transform':'rotate(-90deg)',
	     '-o-transform':'rotate(-90deg)',
	     '-ms-transform':'rotate(-90deg)',
	     'transform':'rotate(-90deg)'
		});
	}
})

$('#designclick').click(function() {
	if(design) {
		$('.design').show()
		design = false;
		$('#designclick').css({
	     '-moz-transform':'rotate(0deg)',
	     '-webkit-transform':'rotate(0deg)',
	     '-o-transform':'rotate(0deg)',
	     '-ms-transform':'rotate(0deg)',
	     'transform':'rotate(0deg)'
		});
	}
	else {
		$('.design').hide()
		design = true;
		$('#designclick').css({
	     '-moz-transform':'rotate(-90deg)',
	     '-webkit-transform':'rotate(-90deg)',
	     '-o-transform':'rotate(-90deg)',
	     '-ms-transform':'rotate(-90deg)',
	     'transform':'rotate(-90deg)'
		});		
	}
})