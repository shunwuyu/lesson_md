<template>
  <Children></Children>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import Children from "./Children2.vue"

const msg = ref('hello 啊，树哥')

provide('msg', msg)
</script>