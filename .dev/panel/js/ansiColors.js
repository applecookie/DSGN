!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("ansiColors",t):n.ansiColors=t()}(this,function(){"use strict";function n(n,t){for(var r=[],e=n;e<=t;e++)r.push(e);return r}function t(n){for(var t=n.toString(16);t.length<2;)t="0"+t;return t}function r(n){for(var r=[],e=0,u=n.length;e<u;e++)r.push(t(n[e]));return"#"+r.join("")}function e(n,t,e,u){var o=n>0?40*n+55:0,i=t>0?40*t+55:0,f=e>0?40*e+55:0;u[16+36*n+6*t+e]=r([o,i,f])}function u(n){return n}function o(n,t,r){return r||(r=""),n.push(t),["<"+t,r?' style="'+r+'"':void 0,">"].join("")}function i(n,t){return o(n,"span","color:"+t)}function f(n){var t=n.slice(0);return n.length=0,t.reverse().map(function(n){return"</"+n+">"}).join("")}function c(n,t){return o(n,"span",t)}function a(n,t){var r=void 0;return n.slice(-1)[0]===t&&(r=n.pop()),r?"</"+t+">":""}function s(n,t){return o(n,"span","background-color:"+t)}function l(n,t,r){var e=void 0,u={"-1":function(){return"<br/>"},0:function(){return n.length&&f(n)},1:function(){return o(n,"b")},3:function(){return o(n,"i")},4:function(){return o(n,"u")},8:function(){return c(n,"display:none")},9:function(){return o(n,"strike")},22:function(){return a(n,"b")},23:function(){return a(n,"i")},24:function(){return a(n,"u")},39:function(){return i(n,r.fg)},49:function(){return s(n,r.bg)}};return u[t=parseInt(t)]?e=u[t]():4<t&&t<7?e=o(n,"blink"):29<t&&t<38?e=i(n,r.colors[t-30]):39<t&&t<48?e=s(n,r.colors[t-40]):89<t&&t<98?e=i(n,r.colors[t-90+8]):99<t&&t<108&&(e=s(n,r.colors[t-100+8])),e}function p(n,t,r,e){var o=void 0;return"text"===t?o=u(r,e):"display"===t?o=l(n,r,e):"xterm256"===t&&(o=i(n,e.colors[r])),o}function h(n){return function(t){return(null===n||t.category!==n)&&"all"!==n}}function b(n){return 0===(n=parseInt(n))?"all":1===n?"bold":2<n&&n<5?"underline":4<n&&n<7?"blink":8===n?"hide":9===n?"strike":29<n&&n<38||39===n||89<n&&n<98?"foreground-color":39<n&&n<48||49===n||99<n&&n<108?"background-color":null}function d(n,t,r){function e(){return""}for(var u=!1,o=3,i=[{pattern:/^\x08+/,sub:e},{pattern:/^\x1b\[[012]?K/,sub:e},{pattern:/^\x1b\[\(B/,sub:e},{pattern:/^\x1b\[38;5;(\d+)m/,sub:function(n,t){return r("xterm256",t),""}},{pattern:/^\n/,sub:function(n){return t.newline?r("display",-1):r("text",n),""}},{pattern:/^\x1b\[((?:\d{1,3};?)+|)m/,sub:function(n,t){u=!0,0===t.trim().length&&(t="0");for(var e=0,o=(t=t.trimRight(";").split(";")).length;e<o;e++)r("display",t[e]);return""}},{pattern:/^\x1b\[?[\d;]{0,3}/,sub:e},{pattern:/^([^\x1b\x08\n]+)/,sub:function(n){return r("text",n),""}}],f=void 0,c=[],a=n.length;a>0;){for(var s=!1,l=0,p=0,h=i.length;p<h;l=++p)if(f=i[l],function(t,r){r>o&&u||(u=!1,n=n.replace(t.pattern,t.sub))}(f,l),n.length!==a){a=n.length,s=!0;break}if(!s){if(n.length===a)break;c.push(0),a=n.length}}return c}function g(n,t,r){return"text"!==t&&(n=n.filter(h(b(r)))).push({token:t,data:r,category:b(r)}),n}var v={fg:"#FFF",bg:"#000",newline:!1,escapeXML:!1,stream:!1,colors:function(){var r={0:"#000",1:"#A00",2:"#0A0",3:"#A50",4:"#00A",5:"#A0A",6:"#0AA",7:"#AAA",8:"#555",9:"#F55",10:"#5F5",11:"#FF5",12:"#55F",13:"#F5F",14:"#5FF",15:"#FFF"};return n(0,5).forEach(function(t){n(0,5).forEach(function(u){n(0,5).forEach(function(n){return e(t,u,n,r)})})}),n(0,23).forEach(function(n){var e=n+232,u=t(10*n+8);r[e]="#"+u+u+u}),r}()};return function(n){n="string"==typeof n?[n]:n;var t=[],r=[],e=v,u=[];return r.forEach(function(n){var r=p(t,n.token,n.data,e);r&&u.push(r)}),d(n.join(""),e,function(n,o){var i=p(t,n,o,e);i&&u.push(i),e.stream&&(r=g(r,n,o))}),t.length&&u.push(f(t)),u.join("")}});

//# sourceMappingURL=../sourcemaps/ansiColors.js.map
