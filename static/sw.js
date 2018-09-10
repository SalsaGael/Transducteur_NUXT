importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.16a9b930899e9e61ee5e.js",
    "revision": "bc635e8fca2912fd1ef31d94ec6652a8"
  },
  {
    "url": "/_nuxt/layouts_default.05057bd84f19fdc01e7d.js",
    "revision": "9cce8e6c788326f61d7870e0f21af820"
  },
  {
    "url": "/_nuxt/manifest.06a134e799e0b4505afb.js",
    "revision": "ffaaea52217c4b39a5a132de0e3f3ff2"
  },
  {
    "url": "/_nuxt/pages_index.bc1786e0b0bb9e50d7c3.js",
    "revision": "1bedf0603fb60528d76c61a57cc9fc69"
  },
  {
    "url": "/_nuxt/pages_pa.04347a95f220aec45693.js",
    "revision": "2f352e457688605e9e7abd8630914633"
  },
  {
    "url": "/_nuxt/pages_pr.b3656e0a0fffb69f1417.js",
    "revision": "f38fae23a36e6214acd64332ddbd093d"
  },
  {
    "url": "/_nuxt/pages_tens.d580957fe0bab0ab7615.js",
    "revision": "abd668afd6a658f6cf54029e2fc733d9"
  },
  {
    "url": "/_nuxt/vendor.ed1ee01973a58703a27b.js",
    "revision": "7b2cba2817abeb99ec3e486ae4904979"
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





