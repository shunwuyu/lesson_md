import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import store from '../store'
import CreatePost from '../views/CreatePost.vue'

const routerHistory = createWebHistory()

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/create',
            name: 'create',
            component: CreatePost,
            meta: { requiredLogin: true }
        },
    ]
})

router.beforeEach((to, from, next) => {
    const { user, token } = store.state
    const { requiredLogin } = to.meta
    if (!user.isLogin) {
        if (token) {
            
        } else {
            if (requiredLogin) {
                next('login')
            } else {
                next()
            }
        }
    } else {
        
    }
})
export default router