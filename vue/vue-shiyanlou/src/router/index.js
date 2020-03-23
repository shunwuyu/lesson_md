import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store/index.js'

Vue.use(VueRouter)
// 两个  封装组件引入， 实现延迟加载
const __import__ = file => () => import(`@/pages/${file}.vue`)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: __import__('home'),
    meta: {
      title: '在线做实验，高效学编程 - 实验楼'
    }
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      title: '在线做实验，高效学编程 - 关于我们'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/user/profile', //用户小家
    name: 'userProfile',
    component: __import__('user/profile/profile'),
    meta: {
      title: '个人设置 - 实验楼',
      login: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// 路由的钩子函数 before 每次路由切换以前 
router.beforeEach((to, from, next) => {
  // console.log(to, from);
  // 明确标题的地方
  document.title = to.meta.title // 设置title 
  // if ()
  if (to.meta.login) { //需要登录的
    // store components
    // store signon  true|false  loginState modules
    if (!store.state.loginState.sign_on) {
      next({
        path: '/login' //鉴权
      })
    } else {
      next() //登陆了
    }
  }
  next();
});

export default router
