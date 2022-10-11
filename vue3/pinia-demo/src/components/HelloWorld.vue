<script setup>
import { mainStore } from '../store/index'
import { ref } from 'vue'
const store = mainStore()
const addOne = () => {
  state.count++
}
defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
  <div>
    <h1>{{ store.msg }}</h1>
    <button @click="addOne">+1</button>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
