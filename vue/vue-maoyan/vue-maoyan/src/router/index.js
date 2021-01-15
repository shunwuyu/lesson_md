import Vue from 'vue'
import Router from 'vue-router'

const Home = (resolve) => {
  import('@/pages/home/Home').then((module) => {
    resolve(module)
  })
}

const Start = (resolve) => {
  import('@/pages/start/Start').then((module) => {
    resolve(module)
  })
}

const Cinema = (resolve) => {
  import('@/pages/cinema/Cinema').then((module) => {
    resolve(module)
  })
}

const My = (resolve) => {
  import('@/pages/my/My').then((module) => {
    resolve(module)
  })
}

const City = (resolve) => {
  import('@/pages/city/City').then((module) => {
    resolve(module)
  })
}

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'start',
      component: Start
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/cinema',
      name: 'cinema',
      component: Cinema
    },
    {
      path: '/my',
      name: 'my',
      component: My
    },
    {
      path: '/city',
      name: 'city',
      component: City
    }
  ]
})
