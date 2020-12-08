import VueRouter from 'vue-router'
import { getToken, setCookie } from '@/utils/auth'
//动态加载
const routes = [
  { path: '/login', component: () => import('@/views/login') },
  { path: '/signup', component: () => import('@/views/login/signup') },
  { path: '/', component: () => import('@/views/index') },
  { path: '/chartpanel/:id', component: () => import('@/views/ChartPanel'), meta: { activeMenu: '/chartpanel/create' }},
];

export const menuRoutes = routes

const router = new VueRouter({
  routes
})

const whiteList = ['/login', '/auth-redirect', '/signup']

router.beforeEach((to, from, next) => {
  console.log(to.path);

  if (getToken()) {
    if (to.path === '/login') {
      next({ path: '/' })
    }
    next()
  } else {
    if (whiteList.includes(to.path)) { // 在免登录白名单，直接进入
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
export default router
