<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- 数据晚一步考虑 -->
    <!-- vue 切页面  -->
    <!-- 数据收归中央管理 -->
    <div v-for="(product, index) in $store.state.products" :key="index">
      {{product.title}}
    </div>
  </div>
</template>

<script>
// 方法， 怎么把vuex store state products 
import { mapGetters } from 'vuex'; 
// 怎么通过mapGetters 将 products 数据流向组件

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  mounted () {
    // console.log(this.$store, this.$router, '-------');
  }
}
</script>

<style>

</style>
