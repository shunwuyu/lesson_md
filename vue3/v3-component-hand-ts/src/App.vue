<script setup lang="ts">
import { ref } from 'vue'
import Input from './components/Input.vue'
const tel = ref("13312341234")
</script>

<template>
<div>
    {{tel}}
    <Input v-model="tel" :disabled="true"/>
</div>
</template>

<style>
</style>
