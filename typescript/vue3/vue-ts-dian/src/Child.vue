<template>
  <p>{{name}}</p>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const name = ref('张麻子')
const changeName = () => {
  name.value = '县长'
}
// 将方法、变量暴露给父组件使用，父组件才可通过 ref API拿到子组件暴露的数据
defineExpose({
  name,
  changeName
})
</script>