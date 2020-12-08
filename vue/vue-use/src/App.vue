<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
    <!-- <ElMessage title="12222" /> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import AVue from './AVue.js'
export default {
  name: 'App',
  components: {
    HelloWorld
  },
  created() {
    // console.log(this.$alert());
    // const av = new AVue({
    //   methods: {
    //     say(){
    //         this.$alert(); 
    //     }
    //   }
    // })
    // av.say();
    // this.$alert();
    // this.$message('fdfdfdf')
    console.log(this.$message, '------');
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
