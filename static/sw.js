importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/03a440c62477dcc20659.js",
    "revision": "ba79e3e2cd17023d1094d227bee6cdc0"
  },
  {
    "url": "/_nuxt/45b3bbdcc38cea41ea98.js",
    "revision": "de60adecf83fcb9325553cfc2197e795"
  },
  {
    "url": "/_nuxt/469a69edde10229e0d51.js",
    "revision": "7da50044143c0c6f00edbadb7bacc4e1"
  },
  {
    "url": "/_nuxt/4d29ab4b912de3c335c0.js",
    "revision": "f3a5500e4bcda1a0294316618da35423"
  },
  {
    "url": "/_nuxt/7640aaa0525b507b38dc.js",
    "revision": "fb858ed80262f1550242ff3a2d02c634"
  },
  {
    "url": "/_nuxt/82c25f35bf7ba0d4c9ae.js",
    "revision": "4abcb9448b35e5304cb80d45f979ec60"
  },
  {
    "url": "/_nuxt/8fb4d1dad67ec3fcf642.js",
    "revision": "9f3ba9192ebc130d09dc89e0cc0fc827"
  },
  {
    "url": "/_nuxt/a6a38e2c5d1889115e68.js",
    "revision": "e6bac5f84052d1a4c0511afc37868359"
  },
  {
    "url": "/_nuxt/ceda71cd78f20ab7ec79.js",
    "revision": "435c8eaff4010f5d432b4696d394ac25"
  },
  {
    "url": "/_nuxt/e6cca593f2d786899a94.js",
    "revision": "66549a1e7802faa22186986e643b5f10"
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





