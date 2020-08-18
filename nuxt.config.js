const serverBaseUrl = 'http://cms.contentacms.io';
const serverFilesUrl = 'http://cms.contentacms.io';

export default {
  generate: {
    fallback: true
  },
  mode: 'universal',
  head: {
    title: 'Vue Nuxt Ripple',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/bulma-4.3.css' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'static/icon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/bulma-4.3.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/css/app.css' },
    ]
  },
  env: {
    serverBaseUrl,
    serverApiUrl: serverBaseUrl + '/api',
    serverFilesUrl,
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Global CSS
  */
  css: [
    //'@/assets/_custom.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
    '~plugins/filters.js',
    '~plugins/vue-lazyload'
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@dpc-sdp/ripple-nuxt-ui',
    '@nuxtjs/axios'
  ],
  axios: {
    // extra config e.g
    BaseURL: serverBaseUrl
  },
  ripple: {
    nuxt: true, // enable if using in SSR environment eg: nuxt
    isDev: true, // set to true to enable dev mode, used to show Ripple component errors if have.
    hostname: 'localhost', // set hostname for rpl-link etc
    origin: '', // URL with protocol://host(:port) e.g. http://localhost:3000
    quickexit: false, // enable quick exit feature
    quickexiturl: 'https://www.google.com', // URL to use for quickexit
    plugins: [], // array of cheerio transformer function plugins to pass to RplMarkup
    viclogo: true, // whether to display primary vic.gov.au logo
    externalLinksInNewWindow: false, // (Bool) Whether links open in new window by default
    card: {
      trimFieldfonts: ['Your-font-name'] // If custom fonts are used in card trimmed field, set them here.
    }
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    transpile: [
      '@dpc-sdp/ripple-global',
      '@dpc-sdp/ripple-icon',
      '@dpc-sdp/ripple-grid',
      '@dpc-sdp/ripple-layout',
      '@dpc-sdp/ripple-card',
      '@dpc-sdp/ripple-grants',
      '@dpc-sdp/ripple-markup',
      '@dpc-sdp/ripple-site-header',
      '@dpc-sdp/ripple-link',
      '@dpc-sdp/ripple-search',
      '@dpc-sdp/ripple-meta-tag',
      '@dpc-sdp/ripple-form',
      '@dpc-sdp/ripple-button',
      '@dpc-sdp/ripple-document-link',
      '@dpc-sdp/ripple-embedded-video',
      '@dpc-sdp/ripple-pagination',
      '@dpc-sdp/ripple-alert',
      '@dpc-sdp/ripple-hero-banner'
    ],
    loaders: {
      sass: {
        sassOptions: {
          indentedSyntax: true
        }
      }
    }
  }
}
