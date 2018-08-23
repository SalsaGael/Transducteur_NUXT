importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "Nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.7c7cb0dedabf04e963d6.js",
    "revision": "35d473b5ca4724c177981083b0581517"
  },
  {
    "url": "/_nuxt/layouts_default.1e07cc1840b0b846b305.js",
    "revision": "4d5fdf8897a58d80db14ffb0122f5814"
  },
  {
    "url": "/_nuxt/manifest.889782810021d2849a95.js",
    "revision": "7aecda574b74e8e05eeeb6978fea8a6d"
  },
  {
    "url": "/_nuxt/pages_index.0e3c6656431456e45ee6.js",
    "revision": "82a07d77efdd0c0ca0124b629a77fc4a"
  },
  {
    "url": "/_nuxt/pages_pa.b1db285c11f7f40d4080.js",
    "revision": "b3aa43a77404475a4838409b7b88f193"
  },
  {
    "url": "/_nuxt/pages_pr.cf7e2c6346ba52635743.js",
    "revision": "4f71c2e4a0b59bcd27582be50b39790b"
  },
  {
    "url": "/_nuxt/pages_tens.760a262c2f2742c5f440.js",
    "revision": "054b455cac84142f20b5941ca30778a2"
  },
  {
    "url": "/_nuxt/vendor.836ac488a4eff5811077.js",
    "revision": "bf0e77d960e9381f9ab3a87977ae4119"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

