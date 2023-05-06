<template>
    <div>
    <input ref="el"/>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const el = ref<HTMLInputElement | null>(null)

onMounted(() => {
    console.log(el.value)
//   有必要在访问 el.value 时使用
//   可选链或类型守卫。这是因为直到组件被挂载前，
//   这个 ref 的值都是初始的 null，
//   并且 v-if 将引用的元素卸载时也会被设置为 null。
  el.value?.focus()
})
</script>

<style scoped>

</style>