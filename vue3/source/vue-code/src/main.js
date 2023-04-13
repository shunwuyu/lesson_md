import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.component('ElContainer', ElContainer)
app
    .use(ElButton)
    .mount('#app')
