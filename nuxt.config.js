module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Transducteur Nuxt',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Calculette rapide de conversion pour tranducteur de mesure'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/img/favicon.ico'
      }, {
        rel: 'apple-touch-icon',
        size: '180x180',
        href: '/img/apple-touch-icon.png'
      },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons'
      }
    ]
  },
  /*
   ** Customize the progress bar color
   */
  loading: {
    color: '#17a2b8',
    height: '2px'
  },
  /*
   ** Build configuration
   */
  modules: [
    '@nuxtjs/pwa'
  ],
  manifest: {
    "name": "Calculette Transducteur",
    "short_name": "Transducteur",
    "display": "standalone",
    "orientation": "portrait",
    "background_color": "#dedede",
    "theme_color": "#17a2b8",
    "dir": "ltr",
    "description": "Calculette rapide de conversion pour tranducteur de mesure"
  },
  plugins: [{
      src: '~plugins/localStorage.js',
      ssr: false
    },
    '~plugins/vuetify.js'
  ],
  css: [{
      src: '~/assets/css/app.styl',
      lang: 'styl'
    },
    {
      src: '~/css/main.css',
      lang: 'css'
    }
  ],
  build: {
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
