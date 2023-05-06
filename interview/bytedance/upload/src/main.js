import { createApp } from 'vue'
import App from './App.vue'
import ElementUI from "element-plus";
import 'element-plus/dist/index.css'
import {
    ElButton
} from 'element-plus'
const app = createApp(App)
app
    .use(ElButton)
    .mount('#app')
