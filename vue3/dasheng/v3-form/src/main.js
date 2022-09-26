import { createApp } from 'vue'
import App from './App.vue'
import 'element3/lib/theme-chalk/index.css'
import Element3 from 'element3'
import {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton
} from 'element3'

createApp(App)
    .use(ElForm)
    .use(ElFormItem)
    .use(ElInput)
    .use(ElButton)
    .mount('#app')
