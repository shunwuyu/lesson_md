<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
const count = ref(0)
// 推导得到的类型：ComputedRef<number>
// const double = computed(() => count.value * 2)
// 你还可以通过泛型参数显式指定类型
const double = computed<number>(() => {
  // 若返回值不是 number 类型则会报错
})
</script>

<style scoped>

</style>