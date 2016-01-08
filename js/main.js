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
	}
	else {
		$('.tech').hide()
		tech = true;
	}
})

$('#designclick').click(function() {
	if(design) {
		$('.design').show()
		design = false;
	}
	else {
		$('.design').hide()
		design = true;
	}
})