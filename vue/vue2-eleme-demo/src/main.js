import Vue from 'vue';
import VueRouter from 'vue-router';
import goods from './views/goods/goods.vue';
import App from './App.vue';
import './common/stylus/index.styl';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    component: goods
}];
  
const router = new VueRouter({
    linkActiveClass: 'active',
    routes
});

new Vue({
    el: '#app',
    router,
    render: h => h(App)
});