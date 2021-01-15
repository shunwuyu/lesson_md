import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('format_date', function format_date (value) {
  // return 'aa'
  const date = new Date(value);
  // console.log(value);
  return `${date.getMonth() + 1}月${date.getDate()}日${date.getHours()}时${date.getMinutes()}分${date.getSeconds()}秒`
})
new Vue({
  render: h => h(App),
}).$mount('#app')
