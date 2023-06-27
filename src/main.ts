import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import App from './App.vue'
import i18n from './lang'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.config.globalProperties.$t = i18n.global.t;

app.use(pinia)
app.use(ElementPlus)
app.use(i18n)
app.use(router)
app.mount('#app')
