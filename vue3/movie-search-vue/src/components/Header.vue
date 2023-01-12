<template>
  <header class="header">
    <h2>{{ title }}</h2>
  </header>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  title: String
})
</script>