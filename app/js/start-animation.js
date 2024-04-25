import circleText from "./circle-text.js";
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

	let lenis, scrollbar;

	const 
	header = document.querySelector(".header"),
	main = document.querySelector(".main"),
	mainBackground = document.querySelector(".main-background");

	function raf(time) {
		lenis.raf(time)
		requestAnimationFrame(raf)
	}

	let resizeCheck = {};
	
	function resizeCheckFunc(size, minWidth, maxWidth) {
		if (window.innerWidth <= size && (resizeCheck[String(size)] == true || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != false) {
			resizeCheck[String(size)] = false;
			maxWidth(); // < size
		}
	
		if (window.innerWidth >= size && (resizeCheck[String(size)] == false || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != true) {
			resizeCheck[String(size)] = true;
			minWidth(); // > size
		}
	}

	function scrollToTarget() {

		const url = new URL(window.location.href),
		search = new URLSearchParams(url.search);

		if (url.href.indexOf("?") > 0) {
			let clean_url = url.href.substring(0, url.href.indexOf("?"));
			window.history.replaceState({}, document.title, clean_url);
		}

		if(search.get("target") && lenis) {
			const targetBlock = document.querySelector(`#${search.get("target")}`);
			if(targetBlock) {
				lenis.scrollTo(targetBlock);
			} else {
				window.location.href = `${url.origin}?target=${search.get("target")}`;
			}
		}
	}

	if(mainBackground) {

		const mainBackgroundLogo = mainBackground.querySelector(".main-background__logo"),
		mainBackgroundLogoItems = mainBackground.querySelectorAll(".main-background__logo span"),
		mainBackgroundLogoSymbol = mainBackground.querySelector(".main-background__logo_symbol"),
		mainBackgroundLine = document.querySelector(".main-background__line");

		const aboutUsSectionTitle = document.querySelector(".about-us__section_title"),
		aboutUsTitle = document.querySelector(".about-us__title"),
		aboutUsSlider = document.querySelectorAll(".about-us__col")[1];
		
		/* gsap.set(document.querySelectorAll(".services, .news, .join-us"), {
			visibility: "hidden"
		}) */

		splitText();

		gsap.set(mainBackgroundLogo, {
			bottom: `${window.innerHeight/2 - mainBackgroundLogo.offsetHeight/2}px`,
			left: window.innerWidth >= 992 ? `${window.innerWidth/2.3}px` : `${window.innerWidth/2.85}px`,
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

		window.addEventListener("load", () => {
			if(isAnimLoaded) {
				resize();
				window.addEventListener("resize", () => resize(true))
				setTimeout(() => {
					startScrollAnimation({lenis});
					document.querySelectorAll(".header__nav_list a").forEach(link => {
						link.addEventListener("click", (event) => {

							const href = link.getAttribute("href");
							if(href.includes("target")) {
								event.preventDefault();
								
								const id = href.split('=').pop(),
								targetBlock = document.querySelector(`#${id}`);

								document.querySelectorAll(".header__burger, .header__nav, body").forEach(element => {
									element.classList.toggle('is-mobile-menu-active')
								})

								if(lenis && targetBlock) {
									lenis.scrollTo(targetBlock);
								} else {
									const url = new URL(window.location.href);
									window.location.href = `${url.origin}/#${id}`;
								}

							}

						})
					})
					document.querySelectorAll(".footer__back").forEach(backButton => {
						backButton.addEventListener("click", (event) => {

							if(lenis) {
								lenis.scrollTo(0)
							}
							
						})
					})
				},5000)
			} else {
				isLoaded = true;
				setTimeout(() => {
					resize();
					window.addEventListener("resize", () => resize(true))
					startScrollAnimation({lenis});
					document.querySelectorAll(".header__nav_list a").forEach(link => {
						link.addEventListener("click", (event) => {

							const href = link.getAttribute("href");
							if(href.includes("target")) {
								event.preventDefault();
								
								const id = href.split('=').pop(),
								targetBlock = document.querySelector(`#${id}`);

								document.querySelectorAll(".header__burger, .header__nav, body").forEach(element => {
									element.classList.toggle('is-mobile-menu-active')
								})

								//scrollToTarget();
								if(lenis && targetBlock) {
									lenis.scrollTo(targetBlock);
								} else {
									const url = new URL(window.location.href);
									window.location.href = `${url.origin}/#${id}`;
								}

							}

						})
					})
					document.querySelectorAll(".footer__back").forEach(backButton => {
						backButton.addEventListener("click", (event) => {

							if(lenis) {
								lenis.scrollTo(0)
							}
							
						})
					})
				},2000)
				
			}
		})

		function resize(isResize=false) {

			if(widthScreen != window.innerWidth) {

				widthScreen = window.innerWidth;

				resizeCheckFunc(992,
				function () {  // screen > 992px
			
					new SimpleBar(document.querySelector(".main-container"), {
						autoHide: false,
					})
			
				},
				function () {  // screen < 992px
			
					
			
				});

				circleText();

				if(lenis) lenis.destroy();
				if(window.innerWidth >= 992) {
					lenis = new Lenis({
						wrapper: document.querySelector(".simplebar-content-wrapper"),
						content: document.querySelector(".simplebar-content")
					})
				} else {
					lenis = new Lenis()
				}

				requestAnimationFrame(raf);

				lenis.scrollTo(0,{immediate: true})
				lenis.stop();

				document.querySelectorAll(".services, .news, .join-us, .about-us__text").forEach(section => section.style.removeProperty("visibility"));

				gsap.set(mainBackgroundLogoSymbol, {
					opacity: 0,
				})

				gsap.set(mainBackgroundLogo, {
					"--logo-opacity": 0.09,
					"--last-opacity": 0,
					scale: 1,
					left: 0,
					translateX: "none",
				})

				gsap.set(mainBackground, {
					"--shadow-opacity": 0,
				})
				
				gsap.set(mainBackgroundLogoItems[3], {
					display: "none",
				})

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
					left: window.innerWidth >= 992 ? `${window.innerWidth/2.3}px` : `${window.innerWidth/2.85}px`,
					scale: window.innerWidth >= 992 ? 0.15 : 0.35,
					"--logo-opacity": 1,
					"--logo-bg-color": "#DF4D44",
				})
				
				indexTimeline.to(mainBackgroundLogo, {
					bottom: `${mainBackgroundLine.offsetHeight/1.5}px`,
					left: `${window.innerWidth/15}px`,
					scale: 1,
					duration: 1,
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

							setTimeout(() => {
								scrollToTarget();
							},500)
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

	} else {
		
		let widthScreen = 0;

		let resizeCheck = {};
		
		function resizeCheckFunc(size, minWidth, maxWidth) {
			if (window.innerWidth <= size && (resizeCheck[String(size)] == true || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != false) {
				resizeCheck[String(size)] = false;
				maxWidth(); // < size
			}
		
			if (window.innerWidth >= size && (resizeCheck[String(size)] == false || resizeCheck[String(size)] == undefined) && resizeCheck[String(size)] != true) {
				resizeCheck[String(size)] = true;
				minWidth(); // > size
			}
		}
		
		setTimeout(() => {
			main.classList.add("is-visible");
			header.classList.add("is-visible");
			document.body.classList.remove("disable-scroll");
			document.querySelectorAll(".footer__back").forEach(backButton => {
				backButton.addEventListener("click", (event) => {

					if(lenis) {
						lenis.scrollTo(0)
					}
					
				})
			})
		},200)

		function resize() {

			if(widthScreen != window.innerWidth) {
				widthScreen = window.innerWidth;

				resizeCheckFunc(992,
					function () {  // screen > 992px
				
						new SimpleBar(document.querySelector(".main-container"), {
							autoHide: false,
						})
				
					},
					function () {  // screen < 992px
				
						
				
					});

				if(lenis) lenis.destroy();
				if(window.innerWidth >= 992) {
					lenis = new Lenis({
						wrapper: document.querySelector(".simplebar-content-wrapper"),
						content: document.querySelector(".simplebar-content")
					})
				} else lenis = new Lenis()
		
				requestAnimationFrame(raf);
		
				lenis.scrollTo(0,{immediate: true})

			}

		}

		resize();

		window.addEventListener("resize", resize);
	}

	

}