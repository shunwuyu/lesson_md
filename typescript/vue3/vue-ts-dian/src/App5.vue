<template>
    <div>

    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
// 运行时 推导得到的类型 { title: string }
// const book = reactive({ title: 'Vue 3 指引' })

interface Book {
  title: string
  year?: number
}

const book: Book = reactive({ title: 'Vue 3 指引' })
</script>

<style scoped>

</style>