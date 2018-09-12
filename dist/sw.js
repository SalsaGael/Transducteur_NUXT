importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.2796336548626c8e89a2.js",
    "revision": "f3454df2ef406998700c245bb9c5606e"
  },
  {
    "url": "/_nuxt/layouts_default.ad3ff5169cc96dd4a979.js",
    "revision": "57e273da7bae73a53f19dc57961e87f4"
  },
  {
    "url": "/_nuxt/layouts_defaultDark.a8bcb1cf6817f86c8c61.js",
    "revision": "f2d642f171676e95e74f60b6d4578037"
  },
  {
    "url": "/_nuxt/manifest.8e048993253fe869b593.js",
    "revision": "ebfbb402694d7db0e761aa11d0caf19e"
  },
  {
    "url": "/_nuxt/pages_index.4327107e013aa543d6a4.js",
    "revision": "df7dc3b129214a40c21d2f5c4a5791c3"
  },
  {
    "url": "/_nuxt/pages_pa.239d7fb9291a2b1e2bea.js",
    "revision": "92f0fb9312604c531e4b4a90400820df"
  },
  {
    "url": "/_nuxt/pages_pr.38daf85bfcf370254998.js",
    "revision": "988931176021e592fe49eb93c162d181"
  },
  {
    "url": "/_nuxt/pages_tens.d580957fe0bab0ab7615.js",
    "revision": "abd668afd6a658f6cf54029e2fc733d9"
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





