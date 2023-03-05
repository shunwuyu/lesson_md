import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import 'lib-flexible/flexible'
import '@/assets/css/index.styl'
import '@/theme/index.styl'
import { createPinia } from 'pinia'


const app = createApp(App)

app
    .use(router)
    .use(createPinia())
    .mount('#app')
