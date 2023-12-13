import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/theme-chalk/src/message-box.scss'
import 'element-plus/theme-chalk/src/message.scss'
import { createApp } from 'vue'
import { createRouter } from 'vue-router'
import App from './App.vue'

import { createI18n } from 'vue-i18n'
import i18nConfig from './i18n-config'
import routerConfig from './router-config'
import './style.css'

const i18n = createI18n(i18nConfig)
const router = createRouter(routerConfig)
const app = createApp(App)
app.use(router)
    .use(i18n)
    .mount('#app')
