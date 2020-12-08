import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/Home')
  }, {
    path: '/city/in',
    name: 'CityIn',
    component: () => import('@/pages/city/in/City')
  }, {
    path: '/city/out',
    name: 'CityOut',
    component: () => import('@/pages/city/out/City')
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: () => import('@/pages/detail/Detail')
  }],
  // 打开新页面从顶部开始显示
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
