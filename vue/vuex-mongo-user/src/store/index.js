import Vue from 'vue'
import Vuex from 'vuex'
import api from '@/api/index.js'

Vue.use(Vuex)
// 单一状态树  单一?  树？
export default new Vuex.Store({
  state: {
    users: [
      // {
      //   "address": {
      //     "city": "Los Angeles",
      //     "state": 'California',
      //     "pincode": "123"
      //   },
      //   "tags": [
      //     "music",
      //     "blogs",
      //     "cricket"
      //   ],
      //   "name": "Tom Benzamin"
      // },
      // {
      //   "address": {
      //     "city": "赣州",
      //     "state": '江西',
      //     "pincode": "331000"
      //   },
      //   "tags": [
      //     "coding",
      //     "blogs"
      //   ],
      //   "name": "王志浩"
      // },
      // {
      //   "address": {
      //     "city": "九江",
      //     "state": '江西',
      //     "pincode": "331000"
      //   },
      //   "tags": [
      //     "coding",
      //     "swim"
      //   ],
      //   "name": "刘子民"
      // },
      //  {
      //   "address": {
      //     "city": "赣州",
      //     "state": '江西',
      //     "pincode": "331000"
      //   },
      //   "tags": [
      //     "coding",
      //     "games"
      //   ],
      //   "name": "衷从海"
      // }
    ]
  },
  mutations: {
    setUsers(state, payload) { // 写操作 唯一地方
      state.users = payload
    }
  },
  actions: { // 写入状态的第一步
    // 更api 通信的地方`
    fetchUsers(context) {
      api
        .fetchUsers((users)=> {
          // console.log(users);
          // 写入state,   严格一些 写一个条子 流程来
          context.commit('setUsers', users)
        })
    },
    
  },
  getters: {  // state computed 函数
    getUsers(state) { // vuex 会给getters  state  读操作
      return state.users.map((user, index) => {
        user.id = user.address.pincode + index
        return user
      })
    }
  },
  modules: {
  }
})
