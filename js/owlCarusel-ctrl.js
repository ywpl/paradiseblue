$(document).ready(function () {
	$(".reviews__clients-carousel").owlCarousel({
		items: 1,
		nav: true,
		navSpeed: 1000,
		autoplaySpeed: 1200,
		dots: false,
		navText: ["", ""],
		loop: true,
		autoplay: true,
		margin: 45,
		autoplayTimeout: 7000,
		autoplayHoverPause: true,
	});
	$(".reviews-page__clients-carousel").owlCarousel({
		items: 1,
		nav: true,
		navSpeed: 1000,
		autoplaySpeed: 1200,
		dots: false,
		navText: ["", ""],
		loop: true,
		autoplay: true,
		margin: 45,
		autoplayTimeout: 7000,
		autoplayHoverPause: true,
	});

	$(".blog-section__carousel").owlCarousel({
		items: 1,
		nav: true,
		navSpeed: 1000,
		autoplaySpeed: 1200,
		dots: false,
		navText: ["", ""],
		loop: true,
		autoplay: true,
		margin: 45,
		autoplayTimeout: 3500,
		autoplayHoverPause: true,
	});

	$(".programs__carousel").owlCarousel({
		items: 1,
		nav: true,
		navSpeed: 1000,
		autoplaySpeed: 1200,
		dots: false,
		navText: ["", ""],
		loop: true,
		autoplay: true,
		margin: 45,
		autoplayTimeout: 5000,
		autoplayHoverPause: true,
	});
});
