import Vue from 'vue'
import App from './App.vue'
import Mock from '@/mock'

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)

// require('./mock.js')

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
