import Vue from 'vue'
import Router from 'vue-router'
// import { Indicator } from 'mint-ui'

Vue.use(Router)

export default new Router({
  mode: 'history',// 去掉路由地址的#
  routes: [
    {
      path: '/',
      name: 'index',
      component(resolve) {
        require(['@/pages/index'], resolve)
      }
    }
  ]
})
