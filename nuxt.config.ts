// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      NUXT_BASE_URL_PROXY_SERVER: process.env.NUXT_BASE_URL_PROXY_SERVER,
    },
    server: {
      NUXT_BASE_URL_JSON_PLACEHOLDER_SERVER:
        process.env.NUXT_BASE_URL_JSON_PLACEHOLDER_SERVER,
    },
  },
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  srcDir: "src/",
  typescript: {
    strict: true,
    typeCheck: true,
  },
  css: ["~/assets/css/main.css", "~/assets/css/font.css"],
  modules: [
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
  ],
  alias: {},
  pinia: {
    autoImports: ["defineStore", "storeToRefs"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  components: [
    {
      path: "~/components/ui",
      prefix: "UI",
    },
  ],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
});
