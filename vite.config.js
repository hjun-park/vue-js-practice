import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      // 001. alias 를 지정하는 방법 '@/components/TheWelcome.vue' 이런 식으로 alias 지정 가능
      '@': fileURLToPath(new URL('./src', import.meta.url))   
    }
  }
})
