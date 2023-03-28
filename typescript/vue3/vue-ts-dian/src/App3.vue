<template>
    <div>

    </div>
</template>

<script setup lang="ts">
// 运行时
const emit = defineEmits(['change', 'update'])
// 基于类型
// 我们对所触发事件的类型进行更细粒度的控制
const emit = defineEmits<{
  (e: 'change', id: number): void
  (e: 'update', value: string): void
}>()
</script>

<style scoped>

</style>