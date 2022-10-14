import { createRouter, createWebHistory } from 'vue-router';
import routes from './router.config';

export const router = createRouter({
    history: createWebHistory(),
    routes,
    strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})
