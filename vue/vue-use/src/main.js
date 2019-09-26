// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import AVue from './AVue.js'
// console.log(AVue);

// import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';

// Vue.use(ElementUI);
import Segment from './segment.js'

Vue.use(Segment);

Vue.config.productionTip = false

// const plugin = {
//   install(){
//     document.write('我是install内的代码')
//   }
// }

// Vue.use(plugin);
Vue.use(AVue);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
