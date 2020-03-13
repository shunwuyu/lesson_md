<template>
  <div id="app">
    <!-- <div v-for="(user, index) in $store.state.users" :key="index"> -->
    <select @change="queryTag">
      <option value="">请选择</option>
      <option value="poem">诗歌</option>
      <option value="coding">编程</option>
      <option value="music">音乐</option>
    </select>
    <div v-for="(user, index) in getUsers" :key="index">
      {{user.id}} {{user.name}}
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { mapGetters, mapActions } from 'vuex';
// 本地map 借 要什么都可以 $store.state 读操作
export default {
  name: 'App',
  // 自己做主 跟别的组件不搭嘎  私有 
  // 兄弟， 没有任何关系 数据就不一致
  // data() {
  //   return {
  //     // 组件做不了主， 数据驱动页面  template 
  //     // 不利于数据的管理 请了财务
  //      // vuex  两部分   UI 用户界面工程师 地方 申请
  //         //数据流管理 vuex 中央 发放
  //     // 用户列表
  //     // users: [
  //       // {
  //       //   "address": {
  //       //     "city": "Los Angeles",
  //       //     "state": 'California',
  //       //     "pincode": "123"
  //       //   },
  //       //   "tags": [
  //       //     "music",
  //       //     "blogs",
  //       //     "cricket"
  //       //   ],
  //       //   "name": "Tom Benzamin"
  //       // },
  //       // {
  //       //   "address": {
  //       //     "city": "赣州",
  //       //     "state": '江西',
  //       //     "pincode": "331000"
  //       //   },
  //       //   "tags": [
  //       //     "coding",
  //       //     "blogs"
  //       //   ],
  //       //   "name": "王志浩"
  //       // },
  //       // {
  //       //   "address": {
  //       //     "city": "九江",
  //       //     "state": '江西',
  //       //     "pincode": "331000"
  //       //   },
  //       //   "tags": [
  //       //     "coding",
  //       //     "swim"
  //       //   ],
  //       //   "name": "刘子民"
  //       // },
  //       //  {
  //       //   "address": {
  //       //     "city": "赣州",
  //       //     "state": '江西',
  //       //     "pincode": "331000"
  //       //   },
  //       //   "tags": [
  //       //     "coding",
  //       //     "games"
  //       //   ],
  //       //   "name": "衷从海"
  //       // }
  //     // ]
  //   }
  // },
  // 中央数据的到来
  computed:{
    ...mapGetters(['getUsers'])
  },
  components: {
    // HelloWorld
  },
  methods:{  // vuex action
  // 抽象一点  UI
    ...mapActions(['fetchUsers', 'queryTag']),
    // 跟据tag, 把相应的用户找出来， 
    // 1. tag change value 
    // 2. users computed mapGetters 
    //   actions  api   发出新的请求  vuex store 
    // 3. api/
    // 4. node router  /tag/:tag
    // queryTag() {

    // }
  },
  mounted() { //使用生命周期取数据
    this.fetchUsers();
    // ajax  二层   TCP 三次握手 安全
    // 派发动作
    // this.$store.dispatch('fetchUsers');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
