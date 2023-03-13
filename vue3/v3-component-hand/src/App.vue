<script setup>
import { ref } from 'vue'
import Input from './components/Input.vue'
const tel = ref('')
</script>

<template>
<div>
  {{tel}}
    <Input :clearable="true"  v-model="tel" size="mini" type="text" placeholder="请输入电话"/>
    <!-- <Input v-model="tel" :disabled="true" size="mini"/> -->
    <!-- <Input :modelValue="tel" @update:modelValue="tel = $event" /> -->
</div>
</template>

<style>

</style>
