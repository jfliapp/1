import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus';
import 'element-plus/theme-chalk/index.css';

import '@/permission'
import { i18n } from '@/lang/index';

const app = createApp(App);
app.use(store)
app.use(ElementPlus)
app.use(i18n)
app.use(router)
app.mount('#app')
