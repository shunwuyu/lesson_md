<template>
    <div>
      <button @click="change">按钮</button>
      {{data}}
      <br/>
      {{obj}}
    </div>
</template>

<script setup lang="ts">
import { reactive, toRaw } from 'vue'

const obj = reactive({
  name: '树哥',
  age: 18
})

const data = toRaw(obj)

const change = () => {
  data.age = 19
  console.log('obj:', obj, 'data:', data);
}

// setTimeout(() => {
//     obj.age = 20
//     console.log('--------')
// }, 5000);
</script>

<style scoped>

</style>