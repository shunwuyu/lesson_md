<template>
  <h3>屏幕尺寸</h3>
  <div>宽度：{{ width }}</div>
  <div>高度：{{ height }}</div>
</template>

<script setup lang="ts">
import useWindowResize from "./hooks/useWindowResize.ts";
const { width, height } = useWindowResize();
</script>