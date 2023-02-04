<script setup>
</script>

<template>
<p>
    <!--`<router-link>` 将呈现一个带有正确 `href` 属性的 `<a>` 标签-->
  <router-link to="/"> Home</router-link> | 
  <router-link to="/about">About</router-link>
</p>
<router-view ></router-view>
</template>

<style scoped>
</style>
