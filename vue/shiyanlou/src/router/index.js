import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const __import__ = file => () => import(`@/pages/${file}.vue`)

const router = new Router({
  routes: [
    {
        path: '/',
        name: 'Home',
        component: __import__('home')
    }
  ]
})

export default router