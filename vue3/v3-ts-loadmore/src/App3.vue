<template>
    <div>
        <input type="text" v-model="state.name">
        <input type="text" v-model="state.color">
        <input type="text" v-model="state.size">
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
const state = reactive({
    name: '',
    color:'',
    size: ''
})
</script>

<style scoped>

</style>