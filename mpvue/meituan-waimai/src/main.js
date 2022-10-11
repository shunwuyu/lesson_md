import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
Vue.prototype.getList = function () {
  wx.showLoading({
    title: '加载中',
  })
  this.$http.get('sell#!method=get').then((res) => {
    this.restaurant = res.data.data.restaurant;
    this.goods = res.data.data.goods;
    this.seller = res.data.data.seller;
    this.ratings = res.data.data.ratings
    wx.hideLoading();
  }).catch((e) => {
    console.log(e)
  })
}
export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    
    
    
  }
}
