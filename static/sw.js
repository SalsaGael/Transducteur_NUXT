importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.82db5ee2bacc446f35d7.js",
    "revision": "65b050acafec03e5eba83c07113482c7"
  },
  {
    "url": "/_nuxt/layouts_default.0dee80a865bd11a9c412.js",
    "revision": "62d8ef51a7cf31c80bcba1cda8ea2762"
  },
  {
    "url": "/_nuxt/layouts_defaultDark.9142738f4da8b984f6fd.js",
    "revision": "c7d0bb5f1192b33b311751073aeec44b"
  },
  {
    "url": "/_nuxt/manifest.f12a99f6ce99a3838151.js",
    "revision": "213f7ba52be774fc109b461da1109d72"
  },
  {
    "url": "/_nuxt/pages_index.4327107e013aa543d6a4.js",
    "revision": "df7dc3b129214a40c21d2f5c4a5791c3"
  },
  {
    "url": "/_nuxt/pages_pa.50b7f70a8c2f88f01e8d.js",
    "revision": "293ae43539030e8cd98675c3ca2ce47d"
  },
  {
    "url": "/_nuxt/pages_pr.450c879c81b501e5f258.js",
    "revision": "593150a0463a1b4eead5b945d06080d3"
  },
  {
    "url": "/_nuxt/pages_tens.484041e3330b1b35dd96.js",
    "revision": "b5dad35f529a34318ef1d3b6746e73b1"
  },
  {
    "url": "/_nuxt/vendor.6c3c03b17b7afa9b5553.js",
    "revision": "2c137448b4ff3866b1699950b0f351fd"
  }
], {
  "cacheId": "Nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





