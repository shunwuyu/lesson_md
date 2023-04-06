import { createRouter, createWebHistory } from 'vue-router'
import ColumnDetail from '../views/ColumnDetail.vue'
import Home from '../views/Home.vue'
import PostDetail from '../views/PostDetail.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import store from '../store'
import { axios } from '../api/config'

const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
      {
        path: '/',
        name: 'home',
        component: Home
      },
      {
        path: '/column/:id',
        name: 'column',
        component: ColumnDetail
      },
      {
        path: '/posts/:id',
        name: 'post',
        component: PostDetail
      },
      {
        path: '/login',
        name: 'login',
        component: Login,
        meta: { redirectAlreadyLogin: true }
      },
      {
        path: '/signup',
        name: 'signup',
        component: Signup,
        meta: { redirectAlreadyLogin: true }
      },
    ]
})

router.beforeEach((to, from, next) => {
  // 第一版本 没有验证 token
  // 是否需要 Login 且 没有登录
  // if (to.meta.requiredLogin && !store.state.user.isLogin) {
  //   next({ name: 'login' })
  // } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
  //   next({ name: 'home' })
  // } else {
  //   next()
  // }
  const { user, token } = store.state
  const { requiredLogin, redirectAlreadyLogin } = to.meta
  if (!user.isLogin) {
    // 没有登录
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      store.dispatch('fetchCurrentUser').then(() => {
        if (redirectAlreadyLogin) {
          next('/')
        } else {
          next()
        }
      }).catch(err => {
        console.log(err)
        store.commit('logout')
        next('login')
      })
    } else {
      if (requiredLogin) {
        next('login')
      } else {
        next()
      }
    }
  } else {
    // 已经登录
    if (redirectAlreadyLogin) {
      next('/')
    } else {
      next()
    }
  }
})

export default router