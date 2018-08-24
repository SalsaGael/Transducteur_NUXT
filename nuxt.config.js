module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Transducteur Nuxt Beta',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, user-scalable=0'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js project'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css'
      },
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'
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
  plugins: ['~plugins/vuetify.js'],
  css: [{
    src: '~/assets/css/app.styl',
    lang: 'styl'
  }],
  build: {
    vendor: ['vuetify'],
    /*vendor: ['vuetify'],
     ** Run ESLint on save
     */
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
