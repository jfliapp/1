import type {
  AxiosInstance,
  // AxiosRequestHeaders,
  AxiosResponse,
  AxiosError
} from 'axios'

import axios from 'axios'

// import { config } from '@/config/axios/config'
const timeout = 50000

// type typeEnum = keyof typeof base_url
// const env = import.meta.env.VITE_API_ENV
// export const PATH_URL = base_url[env as typeEnum]
// 创建axios实例
const service: AxiosInstance = axios.create({
  baseURL: '/', // api 的 base_url
  timeout: timeout // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  (config) => {
    // get参数编码
    // if (config.method === 'get' && config.params) {
    //   let url = config.url as string
    //   url += '?'
    //   const keys = Object.keys(config.params)
    //   for (const key of keys) {
    //     if (config.params[key] !== void 0 && config.params[key] !== null) {
    //       url += `${key}=${encodeURIComponent(config.params[key])}&`
    //     }
    //   }
    //   url = url.substring(0, url.length - 1)
    //   config.params = {}
    //   config.url = url
    // }
    return config
  },
  (error: AxiosError) => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

// response 拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 返回信息不规范 有些接口连 error === 'OK' 都没有 /chat/negotiate?lang=zh-hant
    if (response.status === 200) {
      if (!response.data.error) {
        // 如果没有返回 我就手动写进去
        response.data.error = 'OK'
      }
      return response
    } else {
      // ElMessage.error(response.data.message)
      return Promise.reject(response.data.message)
      // wsCache.clear()
      // tagsViewStore.delAllViews()
      // resetRouter() // 重置静态路由表
      // router.replace('/login')
    }
  },
  (error: AxiosError) => {
    console.log('err' + error) // for debug
    // ElMessage.error(error.message)
    return Promise.reject(error)
  }
)

export { service }