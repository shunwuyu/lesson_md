import { createApp } from 'vue'
import Element3 from 'element3'
import 'element3/lib/theme-chalk/index.css'
import store from './store/index'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)

app.use(store)
    .use(router)
    .use(Element3)
    .mount('#app')