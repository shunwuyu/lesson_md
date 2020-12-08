import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import utils from '@/utils/base.js' 
// import Plugins from '@/plugins/index.js'
// 将常用的工具类 插入到Vue.prototype

Vue.config.productionTip = false
Vue.prototype.utils = utils // this.$utils

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
