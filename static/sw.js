importScripts('/_nuxt/workbox.3de3418b.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "Nuxt",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/app.700c651eb23011d436ff.js",
    "revision": "70e3c75a57ffcdd3996f620cb49b7ea2"
  },
  {
    "url": "/_nuxt/layouts_default.c57eeae3fba0a47510ff.js",
    "revision": "f003ea8dcfb90fe0733b46acc8b3d794"
  },
  {
    "url": "/_nuxt/manifest.4e122c48e1892bf8fcab.js",
    "revision": "f639aacba28cc64b99dd39914c7bb845"
  },
  {
    "url": "/_nuxt/pages_index.bb6a29a85637b2d65a44.js",
    "revision": "799d87e1e823f5665048f9596e96fe7f"
  },
  {
    "url": "/_nuxt/pages_pa.20050304d0c6627c15d1.js",
    "revision": "8c246de7bb8c55b34b4c34c803c5536a"
  },
  {
    "url": "/_nuxt/pages_pr.26b35cde853fc1a0f392.js",
    "revision": "2081c72d30559ae7e2e1324eaab1ee1d"
  },
  {
    "url": "/_nuxt/pages_tens.b3207671fcc9ea9a892f.js",
    "revision": "1e2abc186ecff591eb6db8419b394d32"
  },
  {
    "url": "/_nuxt/vendor.a824af436fbea8a5f33b.js",
    "revision": "c85ddcdcc1d2b6f59bf473621b5f8f4e"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

