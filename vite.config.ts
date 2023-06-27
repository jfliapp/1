// import { fileURLToPath, URL } from 'node:url'

import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// https://vitejs.dev/config/
const root = process.cwd()

function pathResolve(dir: string) {
  return resolve(root, '.', dir)
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.scss', '.css'],
    alias: [
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js'
      },
      {
        // eslint-disable-next-line no-useless-escape
        find: /\@\//,
        replacement: `${pathResolve('src')}/`
      }
      // {
      //   '@': fileURLToPath(new URL('./src', import.meta.url))
      // }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@import '@/assets/main.scss';",
      },
    },
  }
})
