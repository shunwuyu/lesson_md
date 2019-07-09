import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import display from '@/view/Display'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'display',
      component: display
    }
  ]
})
