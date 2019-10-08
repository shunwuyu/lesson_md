<template>
  <div id="app">
    <transition name="tab_router_view">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html {
  scroll-behavior: smooth;
}
body {
  border: 0;
  height: 100%;
  background: #f9f9f9;
  font-size: 13px;
  line-height: 1.4285;
  font-family: -apple-system,BlinkMacSystemFont,Helvetica Neue,PingFang SC,Microsoft YaHei,Source Han Sans SC,Noto Sans CJK SC,WenQuanYi Micro Hei,sans-serif;
}
* {
    margin: 0;
    padding: 0;
}
img {
    height: 100%;
    border: 0;
    vertical-align: middle;
}
ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
}
a {
    text-decoration: none !important;
}
#app {
    height: calc(100vh - 263px);
}
</style>
