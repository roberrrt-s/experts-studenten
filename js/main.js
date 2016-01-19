// hamburger menu

var feed, tech, design = false;

$('#hamclick').click(function() {
	if(feed) {
		$('.content-section').show()
		feed = false;
		console.log("test")
		this.src = 'img/hamburger-cross.png';
	}
	else {
		$('.content-section').hide()
		feed = true;
		this.src = 'img/hamburger.png';
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

// menu

$('#your-feed').click(function() {
	$("#menu-arrow-container").css("margin-left", "0%")
	$("#menu-arrow").css("border-top", "15px solid #3ab34d")
})
$('#trending').click(function() {
	$("#menu-arrow-container").css("margin-left", "20%")
	$("#menu-arrow").css("border-top", "15px solid #f4f8fb")
})
$('#recently-added').click(function() {
	$("#menu-arrow-container").css("margin-left", "40%")
	$("#menu-arrow").css("border-top", "15px solid #f4f8fb")
})
$('#design-menu').click(function() {
	$("#menu-arrow-container").css("margin-left", "60%")
	$("#menu-arrow").css("border-top", "15px solid #f4f8fb")
})
$('#tech-menu').click(function() {
	$("#menu-arrow-container").css("margin-left", "80%")
	$("#menu-arrow").css("border-top", "15px solid #f4f8fb")
})

// search

$('.search-cross').click(function() {
	$(this).removeClass("search-cross");
	var remove = $(this).attr('class');
	$('section.' + remove).remove();
});