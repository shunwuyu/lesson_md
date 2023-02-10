// <!--
//  * 严肃声明：
//  * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
//  * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
//  * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
//  * Copyright (c) 2020 陈尼克 all rights reserved.
//  * 版权所有，侵权必究！
//  *
// -->
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'home',
        meta: {
          index: 1,
          keepAlive: true
        },
        component: Home
      },
      {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
      },
      {
        path: '/cart',
        name: 'cart',
        meta:{
          index: 1
        },
        component: () => import('../views/Cart.vue')
      },
      {
        path: '/category',
        name: 'category',
        component: () => import('../views/Category.vue')
      },
      {
        path: '/product-list',
        name: 'product-list',
        component: () => import('../views/ProductList.vue')
      },
      {
        path: '/product/:id',
        name: 'product',
        component: () => import('@/views/ProductDetail.vue'),
        meta: {
          index: 3
        }
      },
    ]
})

export default router