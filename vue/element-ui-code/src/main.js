import Vue from 'vue'
import App from './App.vue'
import Home from './views/Home.vue'
import About from './views/About.vue'
import 'element-ui/lib/theme-chalk/index.css'
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ]
})

import Carousel from './components/carousel/index.js'
import CarouselItem from './components/carousel-item/index.js';
// import Loading from './components/loading/index.js';
const components = [
  Carousel,
  CarouselItem
]
// Carousel.install(Vue)   
// Carousel.use(Vue)
// console.log(components)

const install = function(Vue, opts = {}) {
  components.forEach(component => {
    // console.log(component, '------');
    Vue.component(component.name, component);
  });
  // Vue.prototype.$loading = Loading.service;
}

install(Vue);


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
