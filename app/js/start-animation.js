import scrollAnimation from "./scroll-animation.js";
import splitText from "./split-text.js";

export default function startAnimation() {
	
	let scrollBarWidth = window.innerWidth - document.body.offsetWidth;

	document.body.classList.remove("disable-scroll");
	document.documentElement.style.setProperty("--scrollbar-width", scrollBarWidth + "px");
	document.body.classList.add("disable-scroll");

	history.scrollRestoration = "manual";

	gsap.registerPlugin(ScrollTrigger);
	ScrollTrigger.config({ ignoreMobileResize: true });
	//ScrollTrigger.normalizeScroll(true);

	let lenis;

	const 
	header = document.querySelector(".header"),
	mainBackground = document.querySelector(".main-background"),
	mainBackgroundLogo = mainBackground.querySelector(".main-background__logo"),
	mainBackgroundLogoItems = mainBackground.querySelectorAll(".main-background__logo span"),
	mainBackgroundLine = document.querySelector(".main-background__line");

	const aboutUsSectionTitle = document.querySelector(".about-us__section_title"),
	aboutUsTitle = document.querySelector(".about-us__title"),
	aboutUsSlider = document.querySelectorAll(".about-us__col")[1];

	splitText();

	gsap.set(mainBackgroundLogo, {
		bottom: `${window.innerHeight/2 - mainBackgroundLogo.offsetHeight/2}px`,
		left: window.innerWidth >= 992 ? `${window.innerWidth/2.35}px` : `${window.innerWidth/2.85}px`,
		scale: window.innerWidth >= 992 ? 0.15 : 0.35,
	})

	let widthScreen = 0, isLoaded = false, isScrollAnimated = false, isAnimLoaded = false, indexTimeline, gradientTimeline;

	gsap.set(document.documentElement, {
		"--gradient-animating": "0px",
		"--gradient-size": `${window.innerWidth*5}px`,
	})
	gradientTimeline = gsap.timeline({ repeat: -1 });
	gradientTimeline.to(document.documentElement, {
		"--gradient-animating": `${window.innerWidth*5}px`,
		duration: 12,
	})

	indexTimeline = gsap.timeline();
	indexTimeline.to(mainBackgroundLogo, {
		opacity: 1,
		duration: 2,
		delay: 0.5,
		"--logo-opacity": 1,
		"--logo-bg-color": "#DF4D44",
		onComplete: () => {
			isAnimLoaded = true;
		}
	})

	function startScrollAnimation(args) {
		if(!isScrollAnimated) {
			isScrollAnimated = true;
			scrollAnimation(args);
		}
	}

	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}

	

	window.addEventListener("load", () => {
		if(isAnimLoaded) {
			resize();
			window.addEventListener("resize", () => resize(true))
			setTimeout(() => {
				startScrollAnimation({lenis});
			},5000)
		} else {
			isLoaded = true;
			setTimeout(() => {
				resize();
				window.addEventListener("resize", () => resize(true))
				startScrollAnimation({lenis});
			},2000)
			
		}
	})

	/* document.querySelectorAll('.pin-spacer').forEach(spacer => {

		spacer.addEventListener('touchmove', function(event) {
			event.target.style.pointerEvents = "none";
		})

		spacer.addEventListener('touchend', function(event) {
			event.target.style.removeProperty("pointer-events");
		});

	}); */
	

	function resize(isResize=false) {

		if(widthScreen != window.innerWidth) {

			widthScreen = window.innerWidth;

			if(lenis) lenis.destroy();
			if(window.innerWidth >= 992) {
				new SimpleBar(document.querySelector(".main-container"), {
					autoHide: false,
				})
				lenis = new Lenis({
					wrapper: document.querySelector(".simplebar-content-wrapper"),
					content: document.querySelector(".simplebar-content")
				})
			} else lenis = new Lenis()

			requestAnimationFrame(raf);

			lenis.scrollTo(0,{immediate: true})
			lenis.stop();

			widthScreen = window.innerWidth;

			if(gradientTimeline) gradientTimeline.kill();
			gsap.set(document.documentElement, {
				"--gradient-animating": "0px",
				"--gradient-size": `${window.innerWidth*5}px`,
			})
			gradientTimeline = gsap.timeline({ repeat: -1 });
			gradientTimeline.to(document.documentElement, {
				"--gradient-animating": `${window.innerWidth*5}px`,
				duration: 12,
				ease: "none",
			})

			if(indexTimeline) indexTimeline.kill();
			indexTimeline = gsap.timeline();
			indexTimeline.pause();

			gsap.set(mainBackgroundLogo, {
				bottom: `${window.innerHeight/2 - mainBackgroundLogo.offsetHeight/2}px`,
				left: window.innerWidth >= 992 ? `${window.innerWidth/2.35}px` : `${window.innerWidth/2.85}px`,
				scale: window.innerWidth >= 992 ? 0.15 : 0.35,
				"--logo-opacity": 1,
				"--logo-bg-color": "#DF4D44",
			})
			
			indexTimeline.to(mainBackgroundLogo, {
				bottom: `${mainBackgroundLine.offsetHeight/1.5}px`,
				left: `${window.innerWidth/15}px`,
				scale: 1,
				duration: 2,
				ease: "power2.inOut",
				//onComplete: () => {}
			})

			indexTimeline.to(mainBackgroundLogo, {
				'--logo-opacity': 0,
				'--gradient-opacity': 1,
				"--logo-bg-color": "#FFF",
				onComplete: () => {
					header.classList.add("is-visible");
					mainBackgroundLine.classList.add("is-visible");
				}
			},"-=0.5")

			indexTimeline.to(aboutUsSectionTitle, {
				onComplete: () => {
					aboutUsSectionTitle.classList.add("is-visible");
					aboutUsTitle.classList.add("is-visible");
					
				}
			},"-=0.5")

			indexTimeline.to(aboutUsTitle.querySelectorAll(".word, .about-us__title_icon"), {
				opacity: 1,
				duration: 1.5,
				stagger: 0.08,
			})

			indexTimeline.to(aboutUsSlider, {
				onComplete: () => {
					aboutUsSlider.classList.add("is-visible");
					document.body.classList.remove("disable-scroll");
					
					if(lenis) {
						lenis.resize();
						lenis.start();
					}
				}
			},"-=1.8")

			if(isResize) {
				indexTimeline.seek(indexTimeline.endTime());
				gsap.set(mainBackgroundLogo, {
					opacity: 1,
				})
				aboutUsSectionTitle.classList.add("is-visible");
				aboutUsTitle.classList.add("is-visible");
				header.classList.add("is-visible");
				header.classList.add("add-blur");
				mainBackgroundLine.classList.add("is-visible");
				mainBackgroundLogo.classList.add("is-active-gradient");
				aboutUsSlider.classList.add("is-visible");
				document.body.classList.remove("disable-scroll");
				document.body.style.background = "#000";
				
				if(lenis) {
					lenis.resize();
					lenis.start();
				}

			} else {
				indexTimeline.play();
				
			}
			
			if(!document.body.classList.contains("disable-scroll")) {
				document.documentElement.style.setProperty("--scrollbar-width", scrollBarWidth + "px");
			} else {
				document.body.classList.remove("disable-scroll");
				scrollBarWidth = window.innerWidth - document.body.offsetWidth;
				document.documentElement.style.setProperty("--scrollbar-width", scrollBarWidth + "px");
				document.body.classList.add("disable-scroll");
			}

		}
	}

}