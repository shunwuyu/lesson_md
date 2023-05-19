<template>
  <div>
    <p class="wrap">{{ message }}</p>
    <button @click="changeMessage">改变消息</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import nextTick  from './nextTick';
const message = ref('Hello World!');
const changeMessage = async () => {
  message.value = 'loading...'
  // Hello World!
  console.log(document.querySelector('.wrap').textContent);
  nextTick(() => {
    console.log(document.querySelector('.wrap').textContent)
  })
  await nextTick() // Promise 
  message.value = '来了'
}
</script>