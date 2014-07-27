// Custom javascript goes here

// Parallax scrolling for transition div

$(function() {
	$(window).stellar({

		// Set scrolling to only be vertical
		horizontalScrolling: false,
		// verticalScrolling: true,

		// Refreshes parallax content on window load and resize
		responsive: true
	});
	console.log('Ran stellar');
});


// Animate Scroll

$(function() {
	$('.down-link a').on('click', function(e) {
		e.preventDefault();
		var scrolldiv = $(this).attr('href');

		$(scrolldiv).animatescroll({scrollSpeed:2500,easing:'easeInOutCubic'});
	});

	$('.top-bar-section ul li a').on('click', function(e) {
		e.preventDefault();
		var scrolldiv = $(this).attr('href');
		$(scrolldiv).animatescroll({scrollSpeed:2500, easing:'easeInOutCubic'});
	});
});

// Rotate social icons clockwise
$('.icon-clock').mouseenter(function() {
		$(this).transition({ rotate: '+=30deg' });
});

$('.icon-clock').mouseleave(function() {
		$(this).transition({ rotate: '-=30deg' });
});

// Rotate social icons counter clockwise
$('.icon-counter').mouseenter(function() {
	$(this).transition({ rotate: '-=20deg' });
});

$('.icon-counter').mouseleave(function() {
	$(this).transition({ rotate: '+=20deg' });
});

// On "MORE" hover, change chevron down color

$('.more-link').mouseenter(function() {
	$('.more-chevron').css({"color": "#000"});
});

$('.more-link').mouseleave(function() {
	$('.more-chevron').css({"color": "#fff"});
});


// On "PROJECTS" hover, change chevron down color
$('.projects-link').mouseenter(function() {
	$('.projects-chevron').css({"color": "#db8e00"});
});

$('.projects-link').mouseleave(function() {
	$('.projects-chevron').css({"color": "#000"});
});

