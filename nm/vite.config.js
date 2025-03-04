//Vite config file

//Imports
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import devServer from '@hono/vite-dev-server'
import vueDevTools from 'vite-plugin-vue-devtools'

//https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8081,
    watch: {
      usePolling: true
    }
  },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    minify: 'esbuild',
    copyPublicDir: true
  },
  plugins: [
    vue(),
    //vueDevTools(),
    devServer({
      entry: "/src/server.js",
      injectClientScript: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  }
})