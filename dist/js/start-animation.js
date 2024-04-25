import circleText from"./circle-text.js";import scrollAnimation from"./scroll-animation.js";import splitText from"./split-text.js";export default function startAnimation(){let e,t=window.innerWidth-document.body.offsetWidth;document.body.classList.remove("disable-scroll"),document.documentElement.style.setProperty("--scrollbar-width",t+"px"),document.body.classList.add("disable-scroll"),history.scrollRestoration="manual",gsap.registerPlugin(ScrollTrigger),ScrollTrigger.config({ignoreMobileResize:!0});const i=document.querySelector(".header"),o=document.querySelector(".main"),n=document.querySelector(".main-background");function r(t){e.raf(t),requestAnimationFrame(r)}let s={};function l(e,t,i){window.innerWidth<=e&&(1==s[String(e)]||null==s[String(e)])&&0!=s[String(e)]&&(s[String(e)]=!1,i()),window.innerWidth>=e&&(0==s[String(e)]||null==s[String(e)])&&1!=s[String(e)]&&(s[String(e)]=!0,t())}if(n){const o=n.querySelector(".main-background__logo"),s=n.querySelectorAll(".main-background__logo span"),c=n.querySelector(".main-background__logo_symbol"),u=document.querySelector(".main-background__line"),m=document.querySelector(".about-us__section_title"),w=document.querySelector(".about-us__title"),g=document.querySelectorAll(".about-us__col")[1];splitText(),gsap.set(o,{bottom:window.innerHeight/2-o.offsetHeight/2+"px",left:window.innerWidth>=992?window.innerWidth/2.3+"px":window.innerWidth/2.85+"px",scale:window.innerWidth>=992?.15:.35});let p,b,y=0,h=!1,f=!1,S=!1;function d(e){f||(f=!0,scrollAnimation(e))}function a(d=!1){y!=window.innerWidth&&(y=window.innerWidth,l(992,(function(){new SimpleBar(document.querySelector(".main-container"),{autoHide:!1})}),(function(){})),circleText(),e&&e.destroy(),e=window.innerWidth>=992?new Lenis({wrapper:document.querySelector(".simplebar-content-wrapper"),content:document.querySelector(".simplebar-content")}):new Lenis,requestAnimationFrame(r),e.scrollTo(0,{immediate:!0}),e.stop(),document.querySelectorAll(".services, .news, .join-us, .about-us__text").forEach(e=>e.style.removeProperty("visibility")),gsap.set(c,{opacity:0}),gsap.set(o,{"--logo-opacity":.09,"--last-opacity":0,scale:1,left:0,translateX:"none"}),gsap.set(n,{"--shadow-opacity":0}),gsap.set(s[3],{display:"none"}),y=window.innerWidth,b&&b.kill(),gsap.set(document.documentElement,{"--gradient-animating":"0px","--gradient-size":5*window.innerWidth+"px"}),b=gsap.timeline({repeat:-1}),b.to(document.documentElement,{"--gradient-animating":5*window.innerWidth+"px",duration:12,ease:"none"}),p&&p.kill(),p=gsap.timeline(),p.pause(),gsap.set(o,{bottom:window.innerHeight/2-o.offsetHeight/2+"px",left:window.innerWidth>=992?window.innerWidth/2.3+"px":window.innerWidth/2.85+"px",scale:window.innerWidth>=992?.15:.35,"--logo-opacity":1,"--logo-bg-color":"#DF4D44"}),p.to(o,{bottom:u.offsetHeight/1.5+"px",left:window.innerWidth/15+"px",scale:1,duration:1,ease:"power2.inOut"}),p.to(o,{"--logo-opacity":0,"--gradient-opacity":1,"--logo-bg-color":"#FFF",onComplete:()=>{i.classList.add("is-visible"),u.classList.add("is-visible")}},"-=0.5"),p.to(m,{onComplete:()=>{m.classList.add("is-visible"),w.classList.add("is-visible")}},"-=0.5"),p.to(w.querySelectorAll(".word, .about-us__title_icon"),{opacity:1,duration:1.5,stagger:.08}),p.to(g,{onComplete:()=>{g.classList.add("is-visible"),document.body.classList.remove("disable-scroll"),e&&(e.resize(),e.start(),setTimeout(()=>{!function(){const t=new URL(window.location.href),i=new URLSearchParams(t.search);if(t.href.indexOf("?")>0){let e=t.href.substring(0,t.href.indexOf("?"));window.history.replaceState({},document.title,e)}if(i.get("target")&&e){const o=document.querySelector("#"+i.get("target"));o?e.scrollTo(o):window.location.href=`${t.origin}?target=${i.get("target")}`}}()},500))}},"-=1.8"),d?(p.seek(p.endTime()),gsap.set(o,{opacity:1}),m.classList.add("is-visible"),w.classList.add("is-visible"),i.classList.add("is-visible"),i.classList.add("add-blur"),u.classList.add("is-visible"),o.classList.add("is-active-gradient"),g.classList.add("is-visible"),document.body.classList.remove("disable-scroll"),document.body.style.background="#000",e&&(e.resize(),e.start())):p.play(),document.body.classList.contains("disable-scroll")?(document.body.classList.remove("disable-scroll"),t=window.innerWidth-document.body.offsetWidth,document.documentElement.style.setProperty("--scrollbar-width",t+"px"),document.body.classList.add("disable-scroll")):document.documentElement.style.setProperty("--scrollbar-width",t+"px"))}gsap.set(document.documentElement,{"--gradient-animating":"0px","--gradient-size":5*window.innerWidth+"px"}),b=gsap.timeline({repeat:-1}),b.to(document.documentElement,{"--gradient-animating":5*window.innerWidth+"px",duration:12}),p=gsap.timeline(),p.to(o,{opacity:1,duration:2,delay:.5,"--logo-opacity":1,"--logo-bg-color":"#DF4D44",onComplete:()=>{S=!0}}),window.addEventListener("load",()=>{S?(a(),window.addEventListener("resize",()=>a()),setTimeout(()=>{d({lenis:e}),document.querySelectorAll(".header__nav_list a").forEach(t=>{t.addEventListener("click",i=>{const o=t.getAttribute("href");if(o.includes("target")){i.preventDefault();const t=o.split("=").pop(),n=document.querySelector("#"+t);if(document.querySelectorAll(".header__burger, .header__nav, body").forEach(e=>{e.classList.toggle("is-mobile-menu-active")}),e&&n)e.scrollTo(n);else{const e=new URL(window.location.href);window.location.href=`${e.origin}/#${t}`}}})}),document.querySelectorAll(".footer__back").forEach(t=>{t.addEventListener("click",t=>{e&&e.scrollTo(0)})})},5e3)):(h=!0,setTimeout(()=>{a(),window.addEventListener("resize",()=>a()),d({lenis:e}),document.querySelectorAll(".header__nav_list a").forEach(t=>{t.addEventListener("click",i=>{const o=t.getAttribute("href");if(o.includes("target")){i.preventDefault();const t=o.split("=").pop(),n=document.querySelector("#"+t);if(document.querySelectorAll(".header__burger, .header__nav, body").forEach(e=>{e.classList.toggle("is-mobile-menu-active")}),e&&n)e.scrollTo(n);else{const e=new URL(window.location.href);window.location.href=`${e.origin}/#${t}`}}})}),document.querySelectorAll(".footer__back").forEach(t=>{t.addEventListener("click",t=>{e&&e.scrollTo(0)})})},2e3))})}else{let t=0,n={};function l(e,t,i){window.innerWidth<=e&&(1==n[String(e)]||null==n[String(e)])&&0!=n[String(e)]&&(n[String(e)]=!1,i()),window.innerWidth>=e&&(0==n[String(e)]||null==n[String(e)])&&1!=n[String(e)]&&(n[String(e)]=!0,t())}function a(){t!=window.innerWidth&&(t=window.innerWidth,l(992,(function(){new SimpleBar(document.querySelector(".main-container"),{autoHide:!1})}),(function(){})),e&&e.destroy(),e=window.innerWidth>=992?new Lenis({wrapper:document.querySelector(".simplebar-content-wrapper"),content:document.querySelector(".simplebar-content")}):new Lenis,requestAnimationFrame(r),e.scrollTo(0,{immediate:!0}))}setTimeout(()=>{o.classList.add("is-visible"),i.classList.add("is-visible"),document.body.classList.remove("disable-scroll"),document.querySelectorAll(".footer__back").forEach(t=>{t.addEventListener("click",t=>{e&&e.scrollTo(0)})})},200),a(),window.addEventListener("resize",a)}}