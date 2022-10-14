import { createApp } from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'

const app = createApp(App)
app
    .use(store)
    .use(router)
    .mount('#app')
