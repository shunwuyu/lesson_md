import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: import("../views/Home.vue")
    },
    {
        path: '/login',
        name: 'Login',
        component: import("../views/Login.vue")
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: to => {
            return { path: '/' };
        }
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;