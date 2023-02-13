import { createApp } from 'vue'
import App from './App.vue'
import {
    ElButton,
    ElContainer,
    ElAside,
    ElMain,
    ElMenu,
    ElSubMenu,
    ElIcon,
    ElForm,
    ElFormItem,
    ElInput,
    ElCheckbox,
    ElPopover,
    ElTag,
    ElCard,
    ElPopconfirm,
    ElTableColumn,
    ElTable,
    ElPagination
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
    .use(ElForm)
    .use(ElFormItem)
    .use(ElCheckbox)
    .use(ElInput)
    .use(ElPopover)
    .use(ElTag)
    .use(ElCard)
    .use(ElPopconfirm)
    .use(ElTableColumn)
    .use(ElTable)
    .use(ElPagination)
    .mount('#app')
