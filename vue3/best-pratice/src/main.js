import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import store from './store/index'
import router from './router/index'

const app = createApp(App)

app
    .use(Element3)
    .use(router)
    .use(store)
    .mount('#app')
