importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "lol",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.4dc29c56390da90a9087.js",
    "revision": "7a85701e9b24fdab5eeb8d2f7e9d30a4"
  },
  {
    "url": "/_nuxt/layouts_default.9784be8fd5e57b851d31.js",
    "revision": "38e6e50583de1b452dd3f0ff47f92573"
  },
  {
    "url": "/_nuxt/layouts_mylayout.b07e04ae57692a2a2cf1.js",
    "revision": "0edbc8606ffe96b43521115215a9746f"
  },
  {
    "url": "/_nuxt/manifest.1697274ecad35e2c583c.js",
    "revision": "732f3c5b6f93868f3d3b29958c0ac7de"
  },
  {
    "url": "/_nuxt/pages_gael.4fec61507458a1d11c39.js",
    "revision": "ac92742cb16d63142b2a3922c5ab7630"
  },
  {
    "url": "/_nuxt/pages_index.6c8e2d3f4a6f096081f4.js",
    "revision": "7a60a03521ab62930627d3fb397e8c32"
  },
  {
    "url": "/_nuxt/vendor.432660ef2260581cb2e0.js",
    "revision": "717582294227a88d6ba9ef5b7034e60d"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

