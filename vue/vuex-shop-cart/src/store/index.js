// 数据管理的地方部门
import Vue from 'vue';
import Vuex from 'vuex'; // 请财务
import Api from '@/api/shop.js';
Vue.use(Vuex);
// 11  
// let products = [];
// Api.getProducts((_products) => {
//   // console.log(_products);
//   products = _products;
// })

export default new Vuex.Store({
  state: {  //  data  react redux 
    products: products
  },// data
  getters: {
    
  } 
})
