<template>
<div>
    <h1>首页</h1>
    <div>我在宁皓网学习 Nuxt.js。</div>
    <div @click="router.push({ path: '/about' })">关于我们 →</div>
</div>
</template>

<script setup lang="ts">
const router = useRouter();
</script>