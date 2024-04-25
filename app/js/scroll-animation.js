export default function scrollAnimation(args={}) {

	function getCoords(elem) {
		let box = elem.getBoundingClientRect();
	
		return {
			top: box.top + window.scrollY,
			right: box.right + window.scrollX,
			bottom: box.bottom + window.scrollY,
			left: box.left + window.scrollX
		};
	}

	let widthScreen = 0, 
	mainBackgroundTimeline,
	mainBackgroundTimeline2,
	mainBackgroundTimeline3,
	servicesNavTimeline,
	//servicesBlocksTimeline,
	aboutUsTextTimeline,
	joinUsHeroTimeline,
	lenis = args.lenis ? args.lenis : false;
	
	const 
	header = document.querySelector(".header"), footer = document.querySelector(".footer"),
	mainBackground = document.querySelector(".main-background"),
	mainBackgroundLogo = mainBackground.querySelector(".main-background__logo"),
	mainBackgroundLogoSymbol = mainBackground.querySelector(".main-background__logo_symbol"),
	mainBackgroundLogoItems = mainBackground.querySelectorAll(".main-background__logo span"),
	mainBackgroundLine = document.querySelector(".main-background__line"),
	mainBackgroundTextElements = document.querySelectorAll(".main-background__text_element"),
	
	servicesSection = document.querySelector(".services"),
	servicesCol = document.querySelectorAll(".services__col"),
	servicesNavLinks = document.querySelectorAll(".services__nav a"),
	servicesBlocks = document.querySelectorAll(".services__blocks_elements div"),
	servicesContentBlocks = document.querySelectorAll(".services__block"),
	
	newsSection = document.querySelector(".news"),
	
	joinUsHero = document.querySelector(".join-us__hero");

	const
	aboutUsText = document.querySelector(".about-us__text");

	servicesNavLinks.forEach((link,index) => {
		link.addEventListener("click", (event) => {
			event.preventDefault();
			if(lenis) {
				lenis.scrollTo(servicesBlocks[index], {offset: 50, lock: true})
			}
		})
	});

	function resize(firstInit=false) {

		/* if(!firstInit) {
			mainBackgroundLogo.classList.remove("background-mode")
		} */

		if(widthScreen != window.innerWidth) {

			let scroller = window.innerWidth >= 992 ? document.querySelector(".simplebar-content-wrapper") : document.querySelector("body");

			ScrollTrigger.killAll();

			widthScreen = window.innerWidth;

			if(mainBackgroundTimeline) mainBackgroundTimeline.kill();
			mainBackgroundTimeline = gsap.timeline({
				scrollTrigger: {
					trigger: ".wrapper",
					start: "top top",
					end: `+=${window.innerHeight}px top`,
					//markers: true,
					scrub: true,
					scroller,
				}
			});

			ScrollTrigger.create({
				trigger: ".wrapper",
				start: "top top",
				scroller,
				onEnter: () => {
					mainBackgroundLine.classList.remove("is-visible");
				},
				onLeaveBack: () => {
					mainBackgroundLine.classList.add("is-visible");
				},
			})

			mainBackgroundTimeline.pause();
			gsap.set(mainBackgroundLogo, {
				"--x": "0.435ch",
			})

			mainBackgroundTimeline.to(mainBackgroundLogo, {
				'--logo-opacity': 0.09,
				'--gradient-opacity': 0,
				onStart: () => footer.classList.add("is-visible")
			})

			mainBackgroundTimeline.to(mainBackgroundLogo, {
				scale: window.innerWidth > 550 ? `3` : "8",
				bottom: `${window.innerHeight/2 - mainBackgroundLogo.offsetHeight/2 - header.offsetHeight/2}px`,
				"--x": "0ch",
				duration: 2,
			})

			if(mainBackgroundTimeline2) mainBackgroundTimeline2.kill();
			mainBackgroundTimeline2 = gsap.timeline({
				scrollTrigger: {
					trigger: ".wrapper",
					start: `+=${window.innerHeight}px top`,
					end: window.innerWidth > 550 ? `+=${servicesSection.offsetHeight + window.innerHeight*4}` : `+=${servicesSection.offsetHeight + window.innerHeight*3}`,
					scroller,
					//markers: true,
					scrub: true,
				}
			});

			mainBackgroundTimeline2.to(mainBackgroundLogo, {
				translateX: window.innerWidth > 550 ? `-20.8ch` : `-63ch`, // -62.85ch
				duration: 2,
			})

			if(mainBackgroundTimeline3) mainBackgroundTimeline3.kill();
			mainBackgroundTimeline3 = gsap.timeline({
				scrollTrigger: {
					trigger: ".wrapper",
					start: window.innerWidth >= 550 ? `+=${servicesSection.offsetHeight + window.innerHeight*4 + newsSection.offsetHeight} top` : `+=${servicesSection.offsetHeight + window.innerHeight*3.5 + newsSection.offsetHeight} top`,
					end: window.innerWidth >= 992 ? `+=${window.innerHeight*2.5}` : `+=${window.innerHeight*2.5}`,
					scrub: true,
					
					scroller,
					onEnter: () => {
						
						gsap.set(mainBackgroundLogoSymbol, {
							"--symbol-scale": window.innerWidth > 550 ? 1 : 2.5,
							"--symbol-y": "-22.5%",
							opacity: 1,
							color: "#171717",
						})
						gsap.set(mainBackgroundLogo, {
							"--opacity": 0,
							"--logo-opacity": 0,
							"--last-opacity": 1,
						})
						gsap.set(mainBackgroundLogoItems[3], {
							display: "block",
						})
					},
					onLeaveBack: () => {
						
						gsap.set(mainBackgroundLogoSymbol, {
							opacity: 0,
						})
						gsap.set(mainBackgroundLogo, {
							"--logo-opacity": 0.09,
							"--last-opacity": 0,
						})
						gsap.set(mainBackground, {
							"--shadow-opacity": 0,
						})
						gsap.set(mainBackgroundLogoItems[3], {
							display: "none",
						})
						/* gsap.set(mainBackgroundLogo.querySelectorAll("span")[4], {
							opacity: 0,
						}) */
					},
				}
			})

			mainBackgroundTimeline3.pause();

			/* gsap.set(mainBackgroundLogo.querySelector("svg"), {
				color: "#171717",
			}) */

			mainBackgroundTimeline3.to(mainBackgroundLogoSymbol, {
				duration: 1,
				color: "#DF4D44",
				onComplete: () => {
					gsap.set(mainBackgroundLogoSymbol, {color: "#DF4D44",})
				}
			})

			mainBackgroundTimeline3.to(mainBackground, {
				duration: 1,
				"--shadow-opacity": 1,
			},"-=1")

			mainBackgroundTimeline3.to(mainBackground, {
				duration: 1,
				delay: 1,
				"--shadow-opacity": 0,
			})

			mainBackgroundTimeline3.to(mainBackgroundLogo, {
				duration: 1,
				"--logo-opacity": 0,
				"--last-opacity": 0,
			},"-=1")

			mainBackgroundTimeline3.to(mainBackgroundLogoSymbol, {
				"--symbol-scale": 0.5,
				"--symbol-y": window.innerWidth > 550 ? "-50%" : "-100%",
				//left: 0,
				//translateX: "-7.45ch",
				//bottom: `${window.innerHeight/2 - mainBackgroundLogo.offsetHeight/2.5}px`,
				duration: 2,
			},"-=0.5")

			/* mainBackgroundTextElements.forEach(element => {
				
			}) */
			gsap.set(mainBackgroundTextElements, {
				"--scale": window.innerWidth >= 768 ? 7 : 10,
			})

			mainBackgroundTimeline3.to(mainBackgroundTextElements[0], {
				duration: 2,
				"--scale": 1,
				onStart: () => {
					gsap.set(mainBackgroundLogoSymbol, {color: "#DF4D44",})
					mainBackgroundTextElements.forEach(element => element.style.visibility = "visible")
				},
				onReverseComplete: () => {
					mainBackgroundTextElements.forEach(element => element.style.removeProperty("visibility"));
				}
			},"-=1")

			mainBackgroundTimeline3.to(mainBackgroundTextElements[1], {
				duration: 2,
				"--scale": 1.5,
			},"-=1")

			mainBackgroundTimeline3.to(mainBackgroundTextElements[2], {
				duration: 2,
				"--scale": 2.1,
			},"-=1")

			mainBackgroundTimeline3.to(mainBackgroundTextElements[3], {
				duration: 2,
				"--scale": 3,
			},"-=1")

			mainBackgroundTimeline3.to(mainBackground, {
				opacity: 0,
				duration: 3,
				delay: 1,
				
			})
			/* mainBackgroundTimeline2.to(mainBackgroundLogo.querySelector("svg"), {
				opacity: 1,
				duration: 1,
			},"-=1") */

			if(aboutUsTextTimeline) aboutUsTextTimeline.kill();
			aboutUsTextTimeline = gsap.timeline({
				scrollTrigger: {
					trigger: document.querySelector(".about-us__text"),
					start: "top top",
					end: `+${document.querySelector(".about-us__text").offsetHeight} top`,
					//markers: true,
					scrub: true,
					pin: true,
					pinType: "fixed",
					scroller,
				}
			});

			gsap.set(aboutUsText.querySelectorAll(".word"), {
				"--color": "#FFF",
			})

			aboutUsTextTimeline.to(aboutUsText.querySelectorAll(".word"), {
				"--color": "#DF4D44",
				stagger: 1,
			})
			
			if(servicesNavTimeline) servicesNavTimeline.kill();

			ScrollTrigger.create({
				trigger: ".services",
				start: "top center",
				onEnter: () => {
					servicesSection.classList.add("is-active");
					servicesContentBlocks[0].classList.add("is-visible");
				},
				onLeaveBack: () => {
					servicesSection.classList.remove("is-active");
					servicesContentBlocks[0].classList.remove("is-visible");
					servicesContentBlocks[0].classList.remove("is-hidden");
				},
				scroller
			})

			if(window.innerWidth >= 992) {

				ScrollTrigger.create({
					trigger: ".services__hero",
					start: "top top",
					end: `+=${document.querySelector(".services__blocks_elements").offsetHeight} top`,
					pin: true,
					//markers: true,
					pinType: "fixed",
					pinSpacing: false,
					scroller
				})
	
				ScrollTrigger.create({
					trigger: ".services__blocks_wrapper",
					start: "top top",
					end: `+=${document.querySelector(".services__blocks_elements").offsetHeight} top`,
					pin: true,
					//markers: true,
					pinType: "fixed",
					scroller
				})

				servicesBlocks.forEach((block,index) => {
				
					ScrollTrigger.create({
						trigger: block,
						start: "top top",
						scroller,
						onEnter: () => {
							document.body.style.background = block.dataset.theme;
							servicesContentBlocks[index].classList.add("is-visible");
							servicesContentBlocks[index].classList.remove("is-hidden");
							servicesNavLinks.forEach(link => link.classList.remove("is-active"));
							servicesNavLinks[index].classList.add("is-active");
							
							if(index != 0) {
								servicesContentBlocks[index-1].classList.add("is-hidden");
							}
						},
						onEnterBack: () => {
							document.body.style.background = block.dataset.theme;
							servicesContentBlocks.forEach((subBlock,subIndex) => {
								if(subIndex > index) subBlock.classList.add("is-hidden");
							})
	
							servicesContentBlocks[index].classList.remove("is-hidden");
	
							if(index != servicesBlocks.length-1) servicesContentBlocks[index+1].classList.remove("is-visible");
	
							servicesNavLinks.forEach(link => link.classList.remove("is-active"));
							servicesNavLinks[index].classList.add("is-active");
						},
						onLeaveBack: () => {
							if(index == 0) document.body.style.background = block.dataset.defaultTheme;
						},
						onLeave: () => {
							if(index == servicesContentBlocks.length-1) document.body.style.background = block.dataset.defaultTheme;
						}
					})
				})

				servicesContentBlocks.forEach((block,index) => {

					block.classList.remove("is-hidden")
					block.classList.remove("is-visible")

				})

			} else {

				servicesContentBlocks.forEach((block,index) => {
				
					ScrollTrigger.create({
						trigger: block,
						start: "top center",
						end: "bottom center",
						scroller,
						onEnter: () => {
							document.body.style.background = servicesBlocks[index].dataset.theme;
						},
						onEnterBack: () => {
							document.body.style.background = servicesBlocks[index].dataset.theme;
						},
						onLeaveBack: () => {
							if(index == 0) document.body.style.background = servicesBlocks[index].dataset.defaultTheme;
						},
						onLeave: () => {
							if(index == servicesContentBlocks.length-1) document.body.style.background = servicesBlocks[index].dataset.defaultTheme;
						}
					})
				})

			}

			if(joinUsHeroTimeline) joinUsHeroTimeline.kill();
			document.documentElement.style.setProperty("--join-us-height", joinUsHero.offsetHeight + 'px');
			joinUsHeroTimeline = gsap.timeline({
				scrollTrigger: {
					trigger: joinUsHero,
					start: `top ${window.innerHeight / 2 - joinUsHero.offsetHeight / 2}`,
					end: `+=${window.innerHeight} top`,
					scroller,
					pin: true,
					pinType: "fixed",
					scrub: true,
				}
			})

			gsap.set(joinUsHero.querySelectorAll(".word"), {
				"--color": "#FFF",
			})

			joinUsHeroTimeline.to(joinUsHero.querySelectorAll(".word"), {
				"--color": "#DF4D44",
				stagger: 1,
			})

			if(lenis) lenis.resize();

		}
	}

	resize(true);
	
	window.addEventListener("resize", () => resize())
	
}