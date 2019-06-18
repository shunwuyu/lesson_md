// VUE的大型项目开发， 分成两种任务
// - 组件开发工作 业务量开发
// - vuex 数据设计 
//   store 独立于组件之外的， 应用App的中央数据管理中心 
//   公司:
//   CEO  state {count:0 } 共享的状态
//   actions  日常动（工）作， 修改状态
//   修改：dispatch 派发 action('name', payload) => action commit('mutation name') mutations => state 修改数据  
//   mutations  财务部 跟老板接触 state
//   审核对状态的修改是否合公司规定  

//   组件 读  this.$store.state.count
//   写  actions(组件调用动作方法，)  

import Vue from 'vue';
import Vuex from 'vuex';
// this.$store.state.count  vue 全局实例 
Vue.use(Vuex);//(启用Vuex, 可拔插的)

const state = {
  count: 0
}

// 改？ 修改要管起来 要严谨
const mutations = {
  // 按我的方式来改
  increment (state) {
    state.count++;
  },
  decrement (state) {
    state.count--;
  }
}

const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even': 'odd'
} 
 
// 组件只能跟actions 交流， 
// 组件不可以直接跟state修改交流 
const actions = {
  increment: ({commit}) => commit('increment'),
  decrement: ({commit}) => commit('decrement'),
  incrementIfOdd({commit, state})  {
    // 将组件逻辑放到action
    // 是否是奇数
    // state.count = 1;
    if ((state.count + 1) % 2 === 0) {
      commit('increment');
    }

  },
  incrementAsync ({commit}) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment');
        resolve();
      }, 2000)
    })
  }
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});