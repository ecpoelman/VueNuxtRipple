export default {
  head: {
    title: 'Vue Nuxt Ripple',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'msapplication-TileColor', content: '#da532c' },
      { name: 'theme-color', content: '#ffffff' },
      { hid: 'description', name: 'description', content: 'Example site for showing how to add custom work' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'static/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/_custom.scss'
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

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@dpc-sdp/ripple-nuxt-ui'
  ],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  ripple: {
    nuxt: true, // enable if using in SSR environment eg: nuxt
    isDev: true, // set to true to enable dev mode, used to show Ripple component errors if have.
    hostname: 'localhost', // set hostname for rpl-link etc
    origin: '', // URL with protocol://host(:port) e.g. http://localhost:3000
    quickexit: true, // enable quick exit feature
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
