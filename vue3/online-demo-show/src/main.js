import { createApp } from 'vue'
import { Swipe, SwipeItem } from 'vant';
import App from './App.vue'
import 'vant/lib/index.css'

const app = createApp(App)
app
    .use(Swipe)
    .use(SwipeItem)
    .mount('#app')
