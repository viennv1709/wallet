import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Wallet',
    title: 'wallet',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  srcDir: 'src',

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/axios.ts', '@/plugins/vee-validate.ts'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules:
    process.env.NODE_ENV === 'production'
      ? [
          // https://go.nuxtjs.dev/typescript
          '@nuxt/typescript-build',
          // https://go.nuxtjs.dev/stylelint
          '@nuxtjs/stylelint-module',
          // https://go.nuxtjs.dev/vuetify
          '@nuxtjs/vuetify',
          '@nuxtjs/composition-api/module',
          '@pinia/nuxt',
        ]
      : [
          // https://go.nuxtjs.dev/typescript
          '@nuxt/typescript-build',
          // https://go.nuxtjs.dev/stylelint
          '@nuxtjs/stylelint-module',
          // https://go.nuxtjs.dev/vuetify
          '@nuxtjs/vuetify',
          '@nuxtjs/composition-api/module',
          '@pinia/nuxt',
          ['@nuxtjs/dotenv', { path: '.' }],
        ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxt/image',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.REMOTE_ENDPOINT_URL,
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['@/assets/variables.scss'],
    treeShake: true,
    theme: {
      light: true,
      themes: {
        light: {
          primary: colors.orange.darken1,
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extractCSS: true,
    transpile: ['pinia', 'vee-validate/dist/rules'],
  },
}
