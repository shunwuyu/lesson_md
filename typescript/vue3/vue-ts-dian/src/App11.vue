<template>
    <div>
       <button @click="change">按钮</button>
       name--{{name}}---age{{age}}
    </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'
const obj = reactive({
  name: '树哥',
  age: 18
})

let { name, age } = toRefs(obj)
const change = () => {
  age.value++
  name.value = '张麻子'
  console.log('obj:', obj);
  console.log('name:', name);
  console.log('age:', age);
}
</script>

<style scoped>

</style>