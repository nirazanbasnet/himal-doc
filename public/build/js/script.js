const mySwiper = new Swiper(".swiper-container", {
	// Optional parameters
	direction: "horizontal",
	loop: true,

	// If we need pagination
	pagination: {
		el: ".swiper-pagination",
		clickable: true
	},

	autoplay: {
		delay: 5000
	},

	fadeEffect: {
		crossFade: true
	},

	lazy: {
		loadPrevNext: true
	},

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	}
});
