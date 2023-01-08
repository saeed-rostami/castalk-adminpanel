import colors from 'vuetify/es5/util/colors'

export default {
  env: {
    baseUrl: "https://api.restorage.io/api/admin/",
  },
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3,
          restorage : "#1030ac"
        }
      }
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },


  loading: {color: '#1030ac', duration: '5000', height: '4px'},

  router: {
    middleware: ['auth']
  },
  /*
   ** Nuxt auth config
   */
  auth: {
    redirect: {
      login: '/auth',
      // users: '/',
      logout: '/auth',
    },

    loggedIn:true,
    strategies: {
      local: {
        token: {
          property: 'data.access_token',
          global: true,
          // required: true,
          type: 'Bearer'
        },
        user: {
          property: "data",
          autoFetch: true
        },
        endpoints: {
          login: { url: 'https://api.restorage.io/api/rest/Admin/AdminLogin', method: 'post' , propertyName: 'data.access_token'},
          logout: { url: 'https://api.restorage.io/api/rest/Admin/AdminLogout', method: 'post' },
          user: { url: 'https://api.restorage.io/api/rest/Admin/AdminCurrent', method: 'get' , propertyName: 'data'}
        },
      }
    }
  }
}
