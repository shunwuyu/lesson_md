<template>
  <div id="app">
    
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'App',
  setup() { //created  只执行一次
  console.log(Vue)
    // let state = Vue.reactive({name: "刘子明"})
    // console.log(state);
    // return {state}
  },
  components: {
    // HelloWorld
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
