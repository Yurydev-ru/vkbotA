export default defineNuxtConfig({
  compatibilityDate: '2024-07-01',
  ssr: true,
  
  runtimeConfig: {
    builder: process.env.NUXT_BUILDER || 'vite',
    apiSecret: process.env.API_SECRET || '',
    public: {
      apiBase: process.env.PUBLIC_API_BASE || '/api'
    }
  },
  nitro: {
    preset: 'vercel',
    routeRules: {
      '/': { swr: true },
      '/about': {static: true},
      '/api/**': { cors: true },
      '/blog/**': {isr: true },
    },
  },
  modules: [
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/devtools',
  ],
  css: ['@/assets/styles/main.scss'],
  typescript: {
    strict: true,
    typeCheck: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/styles/globals" as *;'
        },
      },
    },
  },
  devtools: { enabled: true }
})
