import type { RouteRecordRaw } from 'vue-router';
import BasicLayout from '../layouts/BasicLayout/index.vue';

const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/login',
        component: () => import('../views/login/index.vue'),
        name: 'login',
        meta: { title: '登录' }
    },
    {
        path: '/',
        name: 'Root',
        redirect: '/app',
        meta: {
          title: '首页',
        },
    },
    {
        path: '/app',
        name: 'app',
        component: BasicLayout,
        redirect: '/app/home',
        meta: { title: '管理平台' },
        children: [
            {
                path: '/app/home',
                component: () => import('../views/home/index.vue'),
                name: 'home',
                meta: {
                    title: '首页',
                    icon: 'liulanqi',
                    auth: ['home'],
                },
            }
        ]
    }
]

export default constantRoutes;