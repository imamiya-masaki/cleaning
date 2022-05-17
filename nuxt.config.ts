import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    nitro: {
        preset: 'node',
      },
    css: ['@/assets/css/tailwind.css', '@/assets/css/test.css'],
    build: {
        postcss: {
          postcssOptions: require('./postcss.config.js'),
        }
      },
})
