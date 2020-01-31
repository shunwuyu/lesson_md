<template>
  <div id="app">
    <h3 class="mb30">vue 组件通信的各种方式</h3>
    <p>导航：
      <router-link to="/d1">1.父子组件通信</router-link>    
      <router-link to="/d2">2.父子组件通信more</router-link>    
      <router-link to="/d3">3.父组件获取数据延迟</router-link>   
      <router-link to="/d4">4.子父组件通信</router-link>   
      <router-link to="/d5">5.兄弟组件通信</router-link>   
      <router-link to="/d6">5.父子组件通信</router-link>   
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 20px;
}
.mb30{
  margin-bottom: 30px;
}
</style>
