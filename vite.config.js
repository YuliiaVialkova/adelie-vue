import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // автоматично підключити ці SCSS-файли до кожного <style lang="scss">
        additionalData: `
          @use "@/assests/reset.scss" as *;
          @use "@/assests/vars.scss" as *;
          @use "@/assests/mixins.scss" as *;
          @use "@/assests/fonts.scss" as *;
        `,
      },
    },
  },
})
