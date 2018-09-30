importScripts('/_nuxt/workbox.678c6960.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0f57294371c52842fbc7.js",
    "revision": "7aac573b374bf00f97db94c9e028566f"
  },
  {
    "url": "/_nuxt/1805d2fde8aa1f1dcf86.js",
    "revision": "5dc9d27afc3b77da0d8897082a63bccf"
  },
  {
    "url": "/_nuxt/45b3bbdcc38cea41ea98.js",
    "revision": "de60adecf83fcb9325553cfc2197e795"
  },
  {
    "url": "/_nuxt/4b9f21c98110ff70b6ff.js",
    "revision": "ca915c6ed2c6bdb1818bce93da87fc6e"
  },
  {
    "url": "/_nuxt/4d29ab4b912de3c335c0.js",
    "revision": "f3a5500e4bcda1a0294316618da35423"
  },
  {
    "url": "/_nuxt/8956957396ecf1811050.js",
    "revision": "380db95c57abff24c1ca6ff0598021d7"
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
    "url": "/_nuxt/ffebd91c9406ee06b9c2.js",
    "revision": "5c2aa0b19897750aa43173d89073f68f"
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





