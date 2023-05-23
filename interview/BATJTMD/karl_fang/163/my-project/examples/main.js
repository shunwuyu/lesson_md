import { createApp } from 'vue'
import App from './App.vue'

import ComColorButton from './../packages/index'


const app = createApp(App)
app
    .use(ComColorButton)
    .mount('#app')
