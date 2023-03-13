import { createRouter, createWebHashHistory} from 'vue-router'
import Home from '../views/Home.vue'
import List from '../views/List.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/list',
        name: 'list',
        meta: {
            keepAlive: true
        },
        component: List
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router