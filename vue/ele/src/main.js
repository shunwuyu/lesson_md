import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './config/rem'
Vue.config.productionTip = false
import mengqui from '@shunwuyu/mengqui'
import '@shunwuyu/mengqui/lib/mengqui.css'
Vue.use(mengqui);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
