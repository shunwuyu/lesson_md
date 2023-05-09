<template>
    <div>
      <h1>关于</h1>
      <div>宁皓网创建于 2011 年。</div>
      <div @click="navigateTo({ path: '/' })">← 回到首页</div>
    </div>
  </template>
  
  <script setup lang="ts">
  useHead({
    title: '关于',
  });
  </script>