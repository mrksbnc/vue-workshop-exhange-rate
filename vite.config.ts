import {defineConfig} from "vite";
import {fileURLToPath} from "url";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        ws: true,
        changeOrigin: true,
        target: 'http://localhost:8080',
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    }
  }
})