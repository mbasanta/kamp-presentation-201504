!function e(n,t,i){function o(s,c){if(!t[s]){if(!n[s]){var u="function"==typeof require&&require;if(!c&&u)return u(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var a=t[s]={exports:{}};n[s][0].call(a.exports,function(e){var t=n[s][1][e];return o(t?t:e)},a,a.exports,e,n,t,i)}return t[s].exports}for(var r="function"==typeof require&&require,s=0;s<i.length;s++)o(i[s]);return o}({1:[function(e,n){n.exports=function(e){return function(n){var t,i,o=n.slides.map(function(n){return[].slice.call(n.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0)}),r=function(){var e=t+1;return u(1)?(c(t,i+1),!1):(o[e]&&c(e,0),void 0)},s=function(){var e=t-1;return u(-1)?(c(t,i-1),!1):(o[e]&&c(e,o[e].length-1),void 0)},c=function(e,n){t=e,i=n,o.forEach(function(t,i){t.forEach(function(t,o){t.classList.add("bespoke-bullet"),e>i||i===e&&n>=o?(t.classList.add("bespoke-bullet-active"),t.classList.remove("bespoke-bullet-inactive")):(t.classList.add("bespoke-bullet-inactive"),t.classList.remove("bespoke-bullet-active")),i===e&&o===n?t.classList.add("bespoke-bullet-current"):t.classList.remove("bespoke-bullet-current")})})},u=function(e){return void 0!==o[t][i+e]};n.on("next",r),n.on("prev",s),n.on("slide",function(e){c(e.index,0)}),c(0,0)}}},{}],2:[function(e,n){n.exports=function(){return function(e){var n=function(e,n){e.classList.add("bespoke-"+n)},t=function(e,n){e.className=e.className.replace(new RegExp("bespoke-"+n+"(\\s|$)","g")," ").trim()},i=function(i,o){var r=e.slides[e.slide()],s=o-e.slide(),c=s>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(t.bind(null,i)),i!==r&&["inactive",c,c+"-"+Math.abs(s)].map(n.bind(null,i))};n(e.parent,"parent"),e.slides.map(function(e){n(e,"slide")}),e.on("activate",function(o){e.slides.map(i),n(o.slide,"active"),t(o.slide,"inactive")})}}},{}],3:[function(e,n){n.exports=function(){return function(e){var n=function(){var n=window.location.hash.slice(1),i=parseInt(n,10);n&&(i?t(i-1):e.slides.forEach(function(e,i){e.getAttribute("data-bespoke-hash")===n&&t(i)}))},t=function(n){var t=n>-1&&n<e.slides.length?n:0;t!==e.slide()&&e.slide(t)};setTimeout(function(){n(),e.on("activate",function(e){var n=e.slide.getAttribute("data-bespoke-hash");window.location.hash=n||e.index+1}),window.addEventListener("hashchange",n)},0)}}},{}],4:[function(e,n){n.exports=function(e){return function(n){var t="vertical"!==e;document.addEventListener("keydown",function(e){(34==e.which||32==e.which||t&&39==e.which||!t&&40==e.which)&&n.next(),(33==e.which||t&&37==e.which||!t&&38==e.which)&&n.prev()})}}},{}],5:[function(e,n){n.exports=function(e){return function(n){var t,i,o="vertical"==e?"Y":"X";n.parent.addEventListener("touchstart",function(e){1==e.touches.length&&(t=e.touches[0]["page"+o],i=0)}),n.parent.addEventListener("touchmove",function(e){1==e.touches.length&&(e.preventDefault(),i=e.touches[0]["page"+o]-t)}),n.parent.addEventListener("touchend",function(){Math.abs(i)>50&&n[i>0?"prev":"next"]()})}}},{}],6:[function(e,n){var t=function(e,n){var t=1===e.nodeType?e:document.querySelector(e),i=[].filter.call(t.children,function(e){return"SCRIPT"!==e.nodeName}),o=i[0],r={},s=function(e,n){i[e]&&(l("deactivate",f(o,n)),o=i[e],l("activate",f(o,n)))},c=function(e,n){return arguments.length?(l("slide",f(i[e],n))&&s(e,n),void 0):i.indexOf(o)},u=function(e,n){var t=i.indexOf(o)+e;l(e>0?"next":"prev",f(o,n))&&s(t,n)},a=function(e,n){return(r[e]||(r[e]=[])).push(n),function(){r[e]=r[e].filter(function(e){return e!==n})}},l=function(e,n){return(r[e]||[]).reduce(function(e,t){return e&&t(n)!==!1},!0)},f=function(e,n){return n=n||{},n.index=i.indexOf(e),n.slide=e,n},d={on:a,fire:l,slide:c,next:u.bind(null,1),prev:u.bind(null,-1),parent:t,slides:i};return(n||[]).forEach(function(e){e(d)}),s(0),d};n.exports={from:t}},{}],7:[function(e){var n=e("bespoke"),t=e("bespoke-classes"),i=e("bespoke-keys"),o=e("bespoke-touch"),r=e("bespoke-bullets");hash=e("bespoke-hash"),n.from("article",[t(),i(),o(),r(".bullet"),hash()])},{bespoke:6,"bespoke-bullets":1,"bespoke-classes":2,"bespoke-hash":3,"bespoke-keys":4,"bespoke-touch":5}]},{},[7]);