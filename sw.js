if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,c)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(i[s])return;let o={};const a=e=>n(e,s),f={module:{uri:s},exports:o,require:a};i[s]=Promise.all(r.map((e=>f[e]||a(e)))).then((e=>(c(...e),o)))}}define(["./workbox-0047f92b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"app.js",revision:"19f0e339ed6f1013a22d223f36736d22"},{url:"confetti.min.js",revision:"8c3ffb60f7b56522cd66ea80ec2e9d06"},{url:"createInput.js",revision:"2edafab54b98a7d92085f1c151956e8c"},{url:"img/icon-192x192.png",revision:"8fcc25092edaa8a913315031e4e3aef5"},{url:"img/icon-256x256.png",revision:"d4621ad04af2bd52462637be607b0a28"},{url:"img/icon-384x384.png",revision:"f250af364a8423a94b344c20ba827406"},{url:"img/icon-512x512.png",revision:"766c307a7af93b7af9782653021aea97"},{url:"index.html",revision:"e180b7cc9c9b2166f7567354fcb62a60"},{url:"manifest.json",revision:"1621f4b8945395d12ef19f6e80a41a3b"},{url:"mapel.json",revision:"38bc27ca1caadc69e7892902996bd843"},{url:"style.css",revision:"384d64d875fc5c6189aa4ea2fa0c8dce"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
