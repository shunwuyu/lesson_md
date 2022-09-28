import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element3/lib/theme-chalk/index.css'
import Element3 from 'element3'
import './permission'

createApp(App)
    .use(router)
    .use(store)
    .use(Element3)
    .mount('#app')
