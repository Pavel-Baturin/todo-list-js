!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire1826;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){n[e]=t},t.parcelRequire1826=o),o.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}})),o.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),o.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),o.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),o.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=o("8NIkP"))&&r.__esModule?r:{default:r}}));var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e){return a.default(e)||i.default(e)||c.default(e)||l.default()};var a=d(o("kMC0W")),i=d(o("7AJDX")),l=d(o("8CtQK")),c=d(o("auk6i"));function d(e){return e&&e.__esModule?e:{default:e}}var f=document.querySelector("#myInput"),s=document.querySelector("button"),p=document.querySelector("#myUL");p.addEventListener("click",(function(e){if("LI"!==e.target.tagName)return;var t=Number(e.target.getAttribute("id"));y.map((function(e){t===e.id&&(e.checked=!e.checked,localStorage.setItem("todo",JSON.stringify(y)),v())}))})),s.addEventListener("click",(function(){var t=f.value.trim();if(!t)return;(function(t){var r=Date.now();y=[{value:t,checked:!1,id:r}].concat(e(u)(y)),localStorage.setItem("todo",JSON.stringify(y))})(t),v()}));var y=[];function v(){if(y.length){var e=y.map((function(e){return'<li id="'.concat(e.id,'" class="item ').concat(e.checked?"checked":"",'">').concat(e.value,' <button class="close">Delete</button></li>')})).join("");p.innerHTML=e}}localStorage.getItem("todo")&&(y=JSON.parse(localStorage.getItem("todo")),v())}();
//# sourceMappingURL=index.5c0259b7.js.map