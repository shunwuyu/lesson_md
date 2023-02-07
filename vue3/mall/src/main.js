import { createApp } from 'vue'
import App from './App2.vue'
import router from './router'
import './assets/main.css'
import 'lib-flexible/flexible'
import 'vant/lib/index.css'

import {
    Icon,
    Swipe,
    SwipeItem,
    Skeleton
} from 'vant'

const app = createApp(App)
app
    .use(Icon)
    .use(Swipe)
    .use(SwipeItem)
    .use(Skeleton)
    .use(router)

app.config.globalProperties.$filters = {
    prefix(url) {
        if (url && url.startsWith('http')) {
            return url
        } else {
        url = `http://backend-api-01.newbee.ltd${url}`
            return url
        }
    }
}

app.mount('#app')
