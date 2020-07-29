<template>
  <div id="app">
    <!-- <div v-for="(user, index) in users" :key="index">
      {{user.name}}
    </div> -->
    <select @change="queryTag">
      <option value="">请选择</option>
      <option value="poem">诗歌</option>
      <option value="coding">编程</option>
      <option value="music">音乐</option>
    </select>
    <div v-for="(user, index) in $store.state.users" :key="index">
      {{user.name}}
    </div>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import { mapActions } from 'vuex';

export default {
  name: 'App',
  data() {
    return {
      users: [
        // {
        //   "address": {
        //       "city": "Los Angeles",
        //       "state": "California",
        //       "pincode": "123"
        //   },
        //   "tags": [
        //       "music",
        //       "cricket",
        //       "blogs"
        //   ],
        //   "name": "Tom Benzamin"
        // },
        // {
        //   "address": {
        //       "city": "南昌",
        //       "state": "江西",
        //       "pincode": "30000"
        //   },
        //   "tags": [
        //       "coding"
        //   ],
        //   "name": "蔡刚"
        // }
      ]
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    ...mapActions(['queryTag']),
  },
  mounted() {
    this.$store.dispatch('getUsers');
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
