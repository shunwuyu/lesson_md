import 'sanitize.css';
import './styles/index.less';
import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router';
import './router/permission';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import { store } from './store';

createApp(App)
    .use(router)
    .use(store)
    .use(Antd)
    .mount('#app')
