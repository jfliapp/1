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
  },
  server: {
    host: "0.0.0.0",
    // port: 8800, //更改启动端口
    // 反向代理
    proxy: {
      "/api": {
        // target: "https://192.168.3.26", //测试代理的地址
        target: "https://demo.hlives.vip/", //测试代理的地址
        changeOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        secure: false, //是否验证SSL证书
        ws: true,
        rewrite: (path) => {
          return path
        }
      }
    },
  },
})
