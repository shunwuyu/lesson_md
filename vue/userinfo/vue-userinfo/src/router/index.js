import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/order',
    name: 'Order',
    meta:{
      login: true
    },
    component: () => import('@/pages/Order/Order.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/pages/Login/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.meta.login);
  // if (!router.app.$cookies.get('uid') && to.meta.login){
  //   next({
  //     path: '/login',
  //     query: { redirect: to.fullPath } // 把要跳转的地址作为参数传到下一步
  //   })
  // } else {
    next();
  // }
  
  // if (!router.app.$cookies.get('uid')) {
  //   next({
  //     path: '/login',
  //     query: { redirect: to.fullPath } // 把要跳转的地址作为参数传到下一步
  //   })
  // } else {
  //   next(); 
  // }
  
})

export default router
