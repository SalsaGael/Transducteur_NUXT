importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.d7b22f0777c3f5e4c182.js",
    "revision": "738c474a58e9c535d9f44f64c726f553"
  },
  {
    "url": "/_nuxt/layouts_default.05057bd84f19fdc01e7d.js",
    "revision": "9cce8e6c788326f61d7870e0f21af820"
  },
  {
    "url": "/_nuxt/manifest.e799303248c3cf564bb9.js",
    "revision": "383fe2488b3cbffcc607a2c046129cd2"
  },
  {
    "url": "/_nuxt/pages_index.bc1786e0b0bb9e50d7c3.js",
    "revision": "1bedf0603fb60528d76c61a57cc9fc69"
  },
  {
    "url": "/_nuxt/pages_pa.cd304177ed1e059e7961.js",
    "revision": "b39ef9abe57cb62c973afbc9d484a7a8"
  },
  {
    "url": "/_nuxt/pages_pr.05d00ee29ecc14387fbc.js",
    "revision": "fc0d64d87b9e8e1b708920c1fa30d820"
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





