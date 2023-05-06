<template>
  <!-- 插入至 body -->
  <Teleport to="body">
    <Children></Children>
  </Teleport>
  <!-- 默认 #app 下 -->
  <!-- <Children></Children> -->
</template>
<script lang="ts" setup>
import Children from './Children.vue'
</script>