<template>
  <div id="app">
    <weibo-emoji :weiboIcon="weiboIcon" @changeEmoji="selsctEmoji = selsctEmoji + arguments[0].phrase" ref="emoji"> </weibo-emoji>
  </div>
</template>

<script>
import testData from './data.js'
export default {
  name: 'app',
  data () {
    return {
      msg: '微博表情插件',
      selsctEmoji:'',
      weiboIcon:testData,
    }
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
