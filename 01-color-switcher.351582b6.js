!function(){var t=document.querySelector("[data-start]"),o=document.querySelector("[data-stop]"),e=document.querySelector("body");t.addEventListener("click",(function(t){n||(n=setInterval((function(){return e.style.backgroundColor="".concat("#".concat(Math.floor(16777215*Math.random()).toString(16)))}),1e3),console.log("Start"))})),o.addEventListener("click",(function(t){console.log("stop"),clearInterval(n),n=null}));var n=null}();
//# sourceMappingURL=01-color-switcher.351582b6.js.map
