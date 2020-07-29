import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { userInfo } from '../api'
import store from '../store'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    children: [
      {path: 'home', component: Home},
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/login',
    name: 'login', 
    component: () => import('../views/Login.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const whiteList = ['/home', '/login', ]
router.beforeEach(function (to, from, next) {
  userInfo().then(res => {
    // console.log(res);
    if (res.data.status) {
      // 白名单
      if (whiteList.indexOf(to.path) !== -1) {
        next()
      } else {
        next('/login')
      }
    } else {

      store.commit('RECORD_USERINFO', {info: res.data.result})
      if (to.path === '/login') {
        next({path: '/'})
      }
      next()
    }
  })
})

export default router
