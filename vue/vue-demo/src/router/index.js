import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/login'
import Main from '@/components/Main'
import UserList from '@/components/content/UserList'
import UserManage from '@/components/content/UserManage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/main/user-list',
          name: 'UserList',
          component: UserList
        },
        {
          path: '/main/user-manage',
          name: 'UserManage',
          component: UserManage
        }
      ]
    }
  ]
})
