if (!self.define) {
  let e,
    i = {};
  const n = (n, r) => (
    (n = new URL(n + ".js", r).href),
    i[n] ||
      new Promise((i) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = i), document.head.appendChild(e);
        } else (e = n), importScripts(n), i();
      }).then(() => {
        let e = i[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (r, s) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (i[c]) return;
    let f = {};
    const o = (e) => n(e, c),
      a = { module: { uri: c }, exports: f, require: o };
    i[c] = Promise.all(r.map((e) => a[e] || o(e))).then((e) => (s(...e), f));
  };
}
define(["./workbox-0047f92b"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { 
          url: "app.js", 
          revision: "fc5e79d02875f2027fc8fa5571d95b84",
          strategy: "staleWhileRevalidate",
          cacheName: "assets", 
        },
        {
          url: "confetti.min.js",
          revision: "8c3ffb60f7b56522cd66ea80ec2e9d06",
        },
        { url: "createInput.js", revision: "2edafab54b98a7d92085f1c151956e8c" },
        {
          url: "img/icon-192x192.png",
          revision: "8fcc25092edaa8a913315031e4e3aef5",
          strategy: "cacheFirst",
          plugins: [
            {
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
            },
          ],
        },
        {
          url: "img/icon-256x256.png",
          revision: "d4621ad04af2bd52462637be607b0a28",
          strategy: "cacheFirst",
        },
        {
          url: "img/icon-384x384.png",
          revision: "f250af364a8423a94b344c20ba827406",
          strategy: "cacheFirst",
        },
        {
          url: "img/icon-512x512.png",
          revision: "766c307a7af93b7af9782653021aea97",
          strategy: "cacheFirst",
        },
        { url: "index.html", revision: "31ad6a8f6cc08b7f370de3514c568e6d", strategy: "staleWhileRevalidate",
        cacheName: "assets" },
        { url: "manifest.json", revision: "1621f4b8945395d12ef19f6e80a41a3b", strategy: "staleWhileRevalidate",
        cacheName: "assets" },
        { url: "mapel.json", revision: "38bc27ca1caadc69e7892902996bd843", strategy: "staleWhileRevalidate",
        cacheName: "assets" },
        { url: "style.css", revision: "75af32cfc21f735b1213a0f6a7e10f47", strategy: "staleWhileRevalidate",
        cacheName: "assets", },
      ],
      {
        ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
        maximumAgeSeconds: 2592000,
      }
    );
});
//# sourceMappingURL=sw.js.map
//# { ignoreURLParametersMatching: [/^utm_/, /^fbclid$/] }