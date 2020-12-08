<template>
  <div id="app">
    <Login></Login>
    <transition name="tab_router_view">
      <router-view/>
    </transition>
    <Footer></Footer>
  </div>
</template>

<script>
import Login from '@/components/common_components/sign_on_up/login.vue'
import Footer from '@/components/common_components/footer/footer.vue'

export default {
  name: 'App',
  components: {
    Login,
    Footer
  }
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
    /*width: inherit;*/
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
.tab_router_view-enter-active, .tab_router_view-leave_active {
    /*opacity: 0;*/
    transition: all .5s;
}
.tab_router_view-enter, .tab_router_view-leave-to {
    opacity: 0;
}
.tab_router_view-enter-to, .tab_router_view-leave {
    opacity: 1;
}
</style>
