import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mengqui from '@shunwuyu/mengqui';
import '@shunwuyu/mengqui/lib/mengqui.css';
Vue.use(mengqui);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
