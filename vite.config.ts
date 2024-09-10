import { defineConfig, splitVendorChunkPlugin } from 'vite'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'
import vue from '@vitejs/plugin-vue'
import packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // /app - wszystkie importy będą się odnosić do tego urla
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: true, // 'terser' or 'esbuild'
    sourcemap: false
  },
  define: {
    APP_VERSION: JSON.stringify(packageJson.version)
  },
  server: {
    port: 3000
  },
  plugins: [
    vue(),
    splitVendorChunkPlugin(), // rozdziela pliki index (plik aplikacji) i vendor (plik z zewnętrznymi zależnościami typu vue, axios, itp.)
    ViteImageOptimizer({
      png: {
        quality: 50,
      }
    })
  ],
})
