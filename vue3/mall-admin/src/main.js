import { createApp } from 'vue'
import App from './App.vue'
import {
    ElButton,
    ElContainer,
    ElAside,
    ElMain,
    ElMenu,
    ElSubMenu,
    ElIcon
} from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app
    .use(router)
    .use(ElButton)
    .use(ElContainer)
    .use(ElAside)
    .use(ElMain)
    .use(ElMenu)
    .use(ElSubMenu)
    .use(ElIcon)
    .mount('#app')
