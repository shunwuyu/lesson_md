import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'
// 入口
const app = new Vue(App)
app.$mount()
