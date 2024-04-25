export default function scrollAnimation(e={}){let t,o,r,i,s,l=0,n=!!e.lenis&&e.lenis;const c=document.querySelector(".header"),a=document.querySelector(".footer"),d=document.querySelector(".main-background"),g=d.querySelector(".main-background__logo"),u=d.querySelector(".main-background__logo_symbol"),p=d.querySelectorAll(".main-background__logo span"),y=document.querySelector(".main-background__line"),m=document.querySelectorAll(".main-background__text_element"),h=document.querySelector(".services"),w=(document.querySelectorAll(".services__col"),document.querySelectorAll(".services__nav a")),b=document.querySelectorAll(".services__blocks_elements div"),v=document.querySelectorAll(".services__block"),f=document.querySelector(".news"),_=document.querySelector(".join-us__hero"),S=document.querySelector(".about-us__text");function k(e=!1){if(l!=window.innerWidth){let e=window.innerWidth>=992?document.querySelector(".simplebar-content-wrapper"):document.querySelector("body");ScrollTrigger.killAll(),l=window.innerWidth,t&&t.kill(),t=gsap.timeline({scrollTrigger:{trigger:".wrapper",start:"top top",end:`+=${window.innerHeight}px top`,scrub:!0,scroller:e}}),ScrollTrigger.create({trigger:".wrapper",start:"top top",scroller:e,onEnter:()=>{y.classList.remove("is-visible")},onLeaveBack:()=>{y.classList.add("is-visible")}}),t.pause(),gsap.set(g,{"--x":"0.435ch"}),t.to(g,{"--logo-opacity":.09,"--gradient-opacity":0,onStart:()=>a.classList.add("is-visible")}),t.to(g,{scale:window.innerWidth>550?"3":"8",bottom:window.innerHeight/2-g.offsetHeight/2-c.offsetHeight/2+"px","--x":"0ch",duration:2}),o&&o.kill(),o=gsap.timeline({scrollTrigger:{trigger:".wrapper",start:`+=${window.innerHeight}px top`,end:window.innerWidth>550?"+="+(h.offsetHeight+4*window.innerHeight):"+="+(h.offsetHeight+3*window.innerHeight),scroller:e,scrub:!0}}),o.to(g,{translateX:window.innerWidth>550?"-20.8ch":"-63ch",duration:2}),r&&r.kill(),r=gsap.timeline({scrollTrigger:{trigger:".wrapper",start:window.innerWidth>=550?`+=${h.offsetHeight+4*window.innerHeight+f.offsetHeight} top`:`+=${h.offsetHeight+3.5*window.innerHeight+f.offsetHeight} top`,end:(window.innerWidth,"+="+2.5*window.innerHeight),scrub:!0,scroller:e,onEnter:()=>{gsap.set(u,{"--symbol-scale":window.innerWidth>550?1:2.5,"--symbol-y":"-22.5%",opacity:1,color:"#171717"}),gsap.set(g,{"--opacity":0,"--logo-opacity":0,"--last-opacity":1}),gsap.set(p[3],{display:"block"})},onLeaveBack:()=>{gsap.set(u,{opacity:0}),gsap.set(g,{"--logo-opacity":.09,"--last-opacity":0}),gsap.set(d,{"--shadow-opacity":0}),gsap.set(p[3],{display:"none"})}}}),r.pause(),r.to(u,{duration:1,color:"#DF4D44",onComplete:()=>{gsap.set(u,{color:"#DF4D44"})}}),r.to(d,{duration:1,"--shadow-opacity":1},"-=1"),r.to(d,{duration:1,delay:1,"--shadow-opacity":0}),r.to(g,{duration:1,"--logo-opacity":0,"--last-opacity":0},"-=1"),r.to(u,{"--symbol-scale":.5,"--symbol-y":window.innerWidth>550?"-50%":"-100%",duration:2},"-=0.5"),gsap.set(m,{"--scale":window.innerWidth>=768?7:10}),r.to(m[0],{duration:2,"--scale":1,onStart:()=>{gsap.set(u,{color:"#DF4D44"}),m.forEach(e=>e.style.visibility="visible")},onReverseComplete:()=>{m.forEach(e=>e.style.removeProperty("visibility"))}},"-=1"),r.to(m[1],{duration:2,"--scale":1.5},"-=1"),r.to(m[2],{duration:2,"--scale":2.1},"-=1"),r.to(m[3],{duration:2,"--scale":3},"-=1"),r.to(d,{opacity:0,duration:3,delay:1}),i&&i.kill(),i=gsap.timeline({scrollTrigger:{trigger:document.querySelector(".about-us__text"),start:"top top",end:`+${document.querySelector(".about-us__text").offsetHeight} top`,scrub:!0,pin:!0,pinType:"fixed",scroller:e}}),gsap.set(S.querySelectorAll(".word"),{"--color":"#FFF"}),i.to(S.querySelectorAll(".word"),{"--color":"#DF4D44",stagger:1}),ScrollTrigger.create({trigger:".services",start:"top center",onEnter:()=>{h.classList.add("is-active"),v[0].classList.add("is-visible")},onLeaveBack:()=>{h.classList.remove("is-active"),v[0].classList.remove("is-visible"),v[0].classList.remove("is-hidden")},scroller:e}),window.innerWidth>=992?(ScrollTrigger.create({trigger:".services__hero",start:"top top",end:`+=${document.querySelector(".services__blocks_elements").offsetHeight} top`,pin:!0,pinType:"fixed",pinSpacing:!1,scroller:e}),ScrollTrigger.create({trigger:".services__blocks_wrapper",start:"top top",end:`+=${document.querySelector(".services__blocks_elements").offsetHeight} top`,pin:!0,pinType:"fixed",scroller:e}),b.forEach((t,o)=>{ScrollTrigger.create({trigger:t,start:"top top",scroller:e,onEnter:()=>{document.body.style.background=t.dataset.theme,v[o].classList.add("is-visible"),v[o].classList.remove("is-hidden"),w.forEach(e=>e.classList.remove("is-active")),w[o].classList.add("is-active"),0!=o&&v[o-1].classList.add("is-hidden")},onEnterBack:()=>{document.body.style.background=t.dataset.theme,v.forEach((e,t)=>{t>o&&e.classList.add("is-hidden")}),v[o].classList.remove("is-hidden"),o!=b.length-1&&v[o+1].classList.remove("is-visible"),w.forEach(e=>e.classList.remove("is-active")),w[o].classList.add("is-active")},onLeaveBack:()=>{0==o&&(document.body.style.background=t.dataset.defaultTheme)},onLeave:()=>{o==v.length-1&&(document.body.style.background=t.dataset.defaultTheme)}})}),v.forEach((e,t)=>{e.classList.remove("is-hidden"),e.classList.remove("is-visible")})):v.forEach((t,o)=>{ScrollTrigger.create({trigger:t,start:"top center",end:"bottom center",scroller:e,onEnter:()=>{document.body.style.background=b[o].dataset.theme},onEnterBack:()=>{document.body.style.background=b[o].dataset.theme},onLeaveBack:()=>{0==o&&(document.body.style.background=b[o].dataset.defaultTheme)},onLeave:()=>{o==v.length-1&&(document.body.style.background=b[o].dataset.defaultTheme)}})}),s&&s.kill(),document.documentElement.style.setProperty("--join-us-height",_.offsetHeight+"px"),s=gsap.timeline({scrollTrigger:{trigger:_,start:"top "+(window.innerHeight/2-_.offsetHeight/2),end:`+=${window.innerHeight} top`,scroller:e,pin:!0,pinType:"fixed",scrub:!0}}),gsap.set(_.querySelectorAll(".word"),{"--color":"#FFF"}),s.to(_.querySelectorAll(".word"),{"--color":"#DF4D44",stagger:1}),n&&n.resize()}}w.forEach((e,t)=>{e.addEventListener("click",e=>{e.preventDefault(),n&&n.scrollTo(b[t],{offset:50,lock:!0})})}),k(!0),window.addEventListener("resize",()=>k())}