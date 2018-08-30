importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.c61314a0a2ef1af7a9bf.js",
    "revision": "b925b788ded96bbfd882d866ed3bdb5f"
  },
  {
    "url": "/_nuxt/layouts_default.05057bd84f19fdc01e7d.js",
    "revision": "9cce8e6c788326f61d7870e0f21af820"
  },
  {
    "url": "/_nuxt/manifest.7752d42ae465542aa41e.js",
    "revision": "8e6451af93bc8b7c598230c57210b6c8"
  },
  {
    "url": "/_nuxt/pages_index.bc1786e0b0bb9e50d7c3.js",
    "revision": "1bedf0603fb60528d76c61a57cc9fc69"
  },
  {
    "url": "/_nuxt/pages_pa.5ffcc2a6676a347c2245.js",
    "revision": "cf8fb5440b119912ea530b4932aeea01"
  },
  {
    "url": "/_nuxt/pages_pr.97ff783378416b58581c.js",
    "revision": "fff2a3a9f3bfd9400b097492fbbe0c1c"
  },
  {
    "url": "/_nuxt/pages_tens.a70d6e1a2e79f974ac80.js",
    "revision": "93868fca224b1cdd103fa87b3316b8f9"
  },
  {
    "url": "/_nuxt/vendor.9efae42778b761aafd33.js",
    "revision": "cc2f66bc0324e548b52e23231a077f65"
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





