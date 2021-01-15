<template>
  <div id="app">
    <!-- 使用vue自带的keep-alive包裹router-view,重新进入路由,不用再重新加载组件,重新渲染页面 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style></style>
