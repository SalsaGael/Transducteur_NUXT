importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.84f3fc2d3e21060adfb1.js",
    "revision": "f977f65e55bbaa8d858805591015a182"
  },
  {
    "url": "/_nuxt/layouts_default.05057bd84f19fdc01e7d.js",
    "revision": "9cce8e6c788326f61d7870e0f21af820"
  },
  {
    "url": "/_nuxt/manifest.e5bfd23cc2b39811e745.js",
    "revision": "e7cf2a1334dbad22c41ced0bedfc9233"
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
    "url": "/_nuxt/pages_tens.b5158beb435415b3ed7e.js",
    "revision": "39f7af1544bbbaa730ea1caf8201f77d"
  },
  {
    "url": "/_nuxt/vendor.c6a8c54a0f4fa3761f01.js",
    "revision": "0d6e9c1839cd5e5b72a13a939f4eaeb2"
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





