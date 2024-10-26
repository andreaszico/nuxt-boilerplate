// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      NUXT_BASE_URL_PROXY_SERVER: process.env.NUXT_BASE_URL_PROXY_SERVER
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  srcDir: 'src/',
  typescript: {
    strict: true,
    typeCheck: true,
  },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/eslint',
  ],
  alias:{
  },
  pinia: {
    autoImports: [
      'defineStore',
      'storeToRefs'
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})