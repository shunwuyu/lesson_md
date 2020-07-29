<template>
  <div id="app">
    <moor-switch
  v-model="lightSwitch">开关:</moor-switch>
  </div>
</template>

<script>
import MoorSwitch from '../node_modules/try-vue-npm/src/packages/switch/moor-switch';

export default {
  name: 'app',
  data () {
    return {
      lightSwitch: false,
      msg: 'Welcome to Your Vue.js App'
    }
  },
  watch: {
    lightSwitch: newValue => console.log('开关：', newValue),
  },
  components: {
   'moor-switch' : MoorSwitch
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
