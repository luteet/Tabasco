"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var utils_1=require("./utils"),PI=Math.PI,max=Math.max,min=Math.min,ArcText=function(){function t(t,i){void 0===i&&(i=void 0),this.element=t,this.originalHTML=this.element.innerHTML;var e=document.createElement("div"),s=document.createDocumentFragment();e.setAttribute("aria-label",this.element.innerText),e.style.position="relative",this.container=e,this.letters=utils_1.splitNode(this.element,i),this.letters.forEach((function(t){return s.appendChild(t)})),e.appendChild(s),this.element.innerHTML="",this.element.appendChild(e);var r=window.getComputedStyle(this.element),n=r.fontSize,h=r.lineHeight;this.fontSize=parseFloat(n),this.lineHeight=parseFloat(h)||this.fontSize,this.metrics=this.letters.map(utils_1.getRect);var o=this.metrics.reduce((function(t,i){return t+i.width}),0);this.minRadius=o/PI/2+this.lineHeight,this.dir=1,this.isForceWidth=!1,this.isForceHeight=!0,this.radius=this.minRadius,this.invalidate()}return t.prototype.forceWidth=function(t){return t?(this.isForceWidth=t,this.invalidate(),this):this.isForceWidth},t.prototype.forceHeight=function(t){return t?(this.isForceHeight=t,this.invalidate(),this):this.isForceHeight},t.prototype.direction=function(t){return t?(this.dir=t,this.invalidate(),this):this.dir},t.prototype.arc=function(t){return t?(this.radius=max(this.minRadius,t),this.invalidate(),this):this.radius},t.prototype.destroy=function(){return this.element.innerHTML=this.originalHTML,this},t.prototype.refresh=function(){return this.invalidate()},t.prototype.invalidate=function(){var t=this;return cancelAnimationFrame(this.raf),this.raf=requestAnimationFrame((function(){t.render()})),this},t.prototype.render=function(){var t=this,i="center "+(-1===this.dir?-this.radius+this.lineHeight:this.radius)/this.fontSize+"em",e=this.radius-this.lineHeight,s=utils_1.getLetterRotations(this.metrics,e),r=s.rotations,n=s.θ;if(this.letters.forEach((function(e,s){var h=e.style,o=(-.5*n+r[s])*t.dir,a="translateX("+-.5*t.metrics[s].width/t.fontSize+"em) rotate("+o+"deg)";h.position="absolute",h.bottom=-1===t.dir?"0":"auto",h.left="50%",h.transform=a,h.transformOrigin=i})),this.isForceHeight){var h=n>180?utils_1.sagitta(this.radius,n):utils_1.sagitta(e,n)+this.lineHeight;this.container.style.height=h/this.fontSize+"em"}if(this.isForceWidth){var o=utils_1.chord(this.radius,min(180,n));this.container.style.width=o/this.fontSize+"em"}return this},t}();exports.default=ArcText;