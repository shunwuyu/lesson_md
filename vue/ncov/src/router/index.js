import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import View from '../views/View.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '*',
    name: 'view',
    component: View
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
