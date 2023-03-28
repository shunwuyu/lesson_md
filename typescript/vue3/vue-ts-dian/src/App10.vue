<template>
    <div>
     <button @click="change">按钮</button>
     {{state}}
    </div>
</template>

<script setup lang="ts">
// toRef 如果原始对象是非响应式的,数据会变,但不会更新视图
// toRef返回的值是否具有响应性取决于被解构的对象本身是否具有响应性。响应式数据
// 经过toRef返回的值仍具有响应性，非响应式数据经过toRef返回的值仍没有响应性。
import { reactive, toRef } from 'vue'

const obj = {
  name: '树哥',
  age: 18
}

// const obj = reactive({
//   name: '树哥',
//   age: 18
// })

const state = toRef(obj, 'age')
const change = () => {
  state.value++
  console.log('obj:',obj,'state:', state);
}
</script>

<style scoped>

</style>