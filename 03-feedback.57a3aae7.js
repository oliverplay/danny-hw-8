var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},l={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in l){var n=l[e];delete l[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){l[e]=t},e.parcelRequired7c6=n),(function(e){return e&&e.__esModule?e.default:e})(n("kEUo3")).throttle(s,500);const o=document.querySelector("input"),a=document.querySelector("textarea"),r=document.querySelector("form");function i(){let e=o.value,t=a.value;if(""!==e||""!==t){let l=JSON.stringify({email:e,message:t});localStorage.setItem("feedback-form-state",l)}}function s(){let e=JSON.parse(localStorage.getItem("feedback-form-state"));e&&(r.elements.email.value=e.email||"",r.elements.message.value=e.message||"")}o.addEventListener("input",i),a.addEventListener("input",i),window.addEventListener("load",s),r.addEventListener("submit",e=>{e.preventDefault();let t=r.elements.email.value,l=r.elements.message.value;console.log({email:t,message:l}),localStorage.removeItem("feedback-form-state"),r.reset()});
//# sourceMappingURL=03-feedback.57a3aae7.js.map
