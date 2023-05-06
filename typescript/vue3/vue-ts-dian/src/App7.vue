<template>
    <div>

    </div>
</template>

<script setup lang="ts">
// 在处理原生 DOM 事件时，应该给事件处理函数的参数正确地标注类型
// 没有类型标注时，这个 event 参数会隐式地标注为 any 类型
// tsconfig.json 中配置了 "strict": true 或
//  "noImplicitAny": true 时报出一个 TS 错误
// function handleChange(event) {
//   // `event` 隐式地标注为 `any` 类型
//   console.log(event.target.value)
// }

function handleChange(event: Event) {
  console.log((event.target as HTMLInputElement).value)
}
</script>

<style scoped>

</style>