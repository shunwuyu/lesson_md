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
        component: List
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior(to, from) {
        if(to.name ==='list'){
            // console.log('//////////////////')
            return {top: parseInt(localStorage.getItem('scroll'))}
        }
    }
})

export default router