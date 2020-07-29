<template>
  <div id="app">
    {{t | format_date }}
    <div>{{moment()}}</div>
    <div>{{moment().format()}}</div>
    <div>{{moment().format('YYYY-MM-DD')}}</div>
    <div>{{moment(t).format('YYYY-MM-DD HH:MM:SS')}}</div>
    <div>{{moment().diff(moment(t), 'minutes')}}分钟前</div>
    <div>{{moment('2020-02-29').add(2, 'year')}}</div>

    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import moment from 'moment'

export default {
  name: 'App',
  filters: {
    // format_date (value) {
    //   // return 'aa'
    //   const date = new Date(value);
      
    //   return `${date.getMonth() + 1}月${date.getDate()}日${date.getHours()}时${date.getMinutes()}分${date.getSeconds()}秒`
    // }
  },
  data() {
    return {
      t: 1583373791859,
      moment
    }
  },
  computed: {

  },
  components: {
    HelloWorld
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
