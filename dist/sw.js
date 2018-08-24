importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.fdea29ee39a9571f196c.js",
    "revision": "a20f5541aef7e8aeb4dc4782a0e7d25a"
  },
  {
    "url": "/_nuxt/layouts_default.26689ea0b1d61932e238.js",
    "revision": "28bc834a822ccaa90e37516e2c93e88d"
  },
  {
    "url": "/_nuxt/manifest.175b9eddeab3358166d1.js",
    "revision": "3da905eddf655df9f0082659d0032ef3"
  },
  {
    "url": "/_nuxt/pages_index.bc1786e0b0bb9e50d7c3.js",
    "revision": "1bedf0603fb60528d76c61a57cc9fc69"
  },
  {
    "url": "/_nuxt/pages_pa.9fc06b76c6af660c01e3.js",
    "revision": "6f527a7102911ff14500f35edcfbe4ce"
  },
  {
    "url": "/_nuxt/pages_pr.380a70545de125a19d49.js",
    "revision": "3bfe7be4c2023b60f538fa192e222dd6"
  },
  {
    "url": "/_nuxt/pages_tens.ad6ed1030ea63c4e2ee0.js",
    "revision": "4ff923517bb34988427dfbd35764c7de"
  },
  {
    "url": "/_nuxt/vendor.fe9ec9874f4b8c776746.js",
    "revision": "5969fc68230536eb9c2e8ca323b8995d"
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





