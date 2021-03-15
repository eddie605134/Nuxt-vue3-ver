export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  ssr: false,
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0' // default: localhost
  },
  head: {
    title: 'nuxt-vue3-text',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:image', content: 'https://go.nuxtjs.dev/config-head' },
      { property: 'og:url', content: 'https://go.nuxtjs.dev/config-head' },
      { hid: 'description', name: 'description', content: '練習用' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/notifications.css',
  ],

  loading: '~/components/Loading.vue',

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/demo.js',
    '~/plugins/axios.js',
    '~/plugins/notification.js',
    '~/plugins/localStorage.js',
    '~/plugins/cookie.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
