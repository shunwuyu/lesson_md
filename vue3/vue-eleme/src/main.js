import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import './common/stylus/index.styl';
import goods from './pages/goods/goods.vue'
const routes = [{
    path: '/',
    component: goods
}, {
    path: '/goods',
    component: goods
}
// , {
//     path: '/ratings',
//     component: ratings
// }, {
//     path: '/seller',
//     component: seller
// }
];

const router = createRouter({
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})


const app = createApp(App)
//确保 _use_ 路由实例使
//整个应用支持路由。
app.use(router)
app.mount('#app')

// createApp(App)
//     .use(router)
//     .mount('#app')
