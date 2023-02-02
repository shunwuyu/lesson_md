import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import {
    ElButton,
    ElCard
} from 'element-plus'


const app = createApp(App)
app
    .use(ElButton)
    .use(ElCard)
app.mount('#app')
