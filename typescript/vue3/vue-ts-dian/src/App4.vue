<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
// 运行时推导出的类型：Ref<number>
// const year = ref(2020)
// year.value = '2020'
// 通过接口指定类型 有时我们可能想为 ref 内的值指定一个更复杂的类型
// const year: Ref<string | number> = ref('2020')
// 通过泛型指定类型
const year = ref<string | number>('2020')
year.value = 2020
</script>

<style scoped>

</style>