!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc");document.querySelector("form").addEventListener("submit",(function(n){var o=function(n){setTimeout((function(){var o,t,i;(o=d,t=n,i=Math.random()>.3,new Promise((function(e,n){i?e({position:o,delay:t}):n({position:o,delay:t})}))).then((function(n){var o=n.position,t=n.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms")),e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t,"ms"))})).catch((function(n){var o=n.position,t=n.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(t,"ms")),e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t,"ms"))})),d+=1}),n)};n.preventDefault();for(var t=n.currentTarget.elements,i=t.delay,a=t.step,c=t.amount,l=Number(i.value),u=Number(i.value)+Number(a.value)*Number(c.value-1),s=Number(a.value),d=1,f=l;f<=u;f+=s)o(f)}))}();
//# sourceMappingURL=03-promises.f66304ea.js.map