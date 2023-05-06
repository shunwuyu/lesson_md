<template>
  <div>
    <child ref='childRef' />
    <button @click="getName">获取子组件中的数据</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import child from './Child.vue'

// 子组件ref（TypeScript语法）
const childRef = ref<InstanceType<typeof child>>()

const getName = () => {
  // 获取子组件name
  console.log(childRef.value!.name)
  // 执行子组件方法
  childRef.value?.changeName()
  // 获取修改后的name
  console.log(childRef.value!.name)
}
</script>