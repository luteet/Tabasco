export default function sliders() {

	document.querySelectorAll('.about-us__slider').forEach(sliderElement => {
	
		const slider = new Splide(sliderElement, {
	
			type: "fade",
			//direction: "ttb",
			rewind: true,
			//perPage: 1,
			//height: "12.5rem",

			arrows: false,
			pagination: false,
			
			autoplay: true,
			interval: 3000,

			drag: false,

			speed: 1000,
			easing: "ease",

			updateOnMove: true,
			autoScroll: {
				speed: 0,
			},

			intersection: {
				inView: {
					autoplay: true,
				},
				outView: {
					autoplay: false,
				},
			},
	
		});

		slider.on("mounted",() => {
			setTimeout(() => slider.go(">"),3000)
		})

		document.querySelectorAll(".about-us__slide_media video").forEach(video => {
			video.setAttribute("src", video.dataset.src)
			video.load();
			video.addEventListener("loadeddata", () => {
				video.play();
				video.addEventListener("ended", () => {
					video.currentTime = 0;
					video.play();
				})
			})

		})
	
		slider.mount(window.splide.Extensions.Intersection);
	
	})

	document.querySelectorAll('.news__slider').forEach(sliderElement => {
	
		const slider = new Splide(sliderElement, {
	
			perPage: 4,
			gap: "3.5rem",

			arrows: false,
			pagination: false,

			easing: "ease",
			speed: 700,

			updateOnMove: true,
	
			breakpoints: {
				992: {
					easing: "ease",
					speed: 400,
					perPage: 2,
					gap: "2rem",
					padding: {
						right: "1.25rem"
					},
				},
	
				550: {
					perPage: 1,
					gap: "1rem",
				}
			}
	
		});
	
		slider.mount();
	
	})

	document.querySelectorAll('.side-popup__decor_slider').forEach(sliderElement => {
	
		const slider = new Splide(sliderElement, {
	
			type: "loop",
			gap: "1.5rem",
			autoWidth: true,
			arrows: false,
			pagination: false,
			drag: false,
			autoScroll: {
				speed: 0.8,
				pauseOnHover: false,
				pauseOnFocus: false,
			},
			
	
		});
	
		slider.mount(window.splide.Extensions);
	
	})

	document.querySelectorAll('.single-gallery').forEach(sliderElement => {
	
		const slider = new Splide(sliderElement, {
	
			autoWidth: true,
			arrows: false,
			pagination: false,

			/* gap: "2.5rem",
			padding: {
				left: "5.4375rem",
				right: "5.4375rem"
			}, */

			gap: "1rem",
			padding: {
				left: "1rem",
				right: "1rem"
			},

			mediaQuery: "min",
	
			breakpoints: {
				992: {
					destroy: true,
				},
			}
	
		});
	
		slider.mount();
	
	})

	document.querySelectorAll('.mentioned__slider').forEach(sliderElement => {
	
		const slider = new Splide(sliderElement, {
	
			perPage: 2,
			autoWidth: true,
			//startIndex: 1,
			
			arrows: false,
			pagination: false,
			focus: "center",
			gap: "4vw",

			mediaQuery: "min",
	
			breakpoints: {
				768: {
					destroy: true,
				},
	
				550: {
					// params
				}
			}
	
		});
	
		slider.mount();
	
	})

	document.querySelectorAll('.marquee').forEach(sliderElement => {
	
		const slider = new Splide(sliderElement, {
	
			type: "loop",
			gap: "1.5rem",
			autoWidth: true,
			arrows: false,
			pagination: false,
			drag: false,
			autoScroll: {
				speed: 0.8,
				pauseOnHover: false,
				pauseOnFocus: false,
			},

			breakpoints: {
				992: {
					gap: "4vw",
					
				},
			}
	
		});
	
		slider.mount(window.splide.Extensions);
	
	})
}
