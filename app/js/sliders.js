export default function sliders() {
	document.querySelectorAll('.about-us__slider').forEach(sliderElement => {
	
		const slider = new Splide(sliderElement, {
	
			type: "loop",
			direction: "ttb",
			perPage: 1,
			height: "12.5rem",

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
					easing: "cubic-bezier(0.25, 1, 0.5, 1)",
					speed: 400,
					perPage: 2,
					gap: "2rem",
				},
	
				550: {
					perPage: 1,
					gap: "1rem",
				}
			}
	
		});
	
		slider.mount();
	
	})
}
