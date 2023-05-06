<template>
    <div>

    </div>
</template>

<script setup lang="ts">
// 会立即执行传入的一个函数，同时响应式追踪其依赖，
// 并在其依赖变更时重新运行该函数
// 有点像计算属性
// import { ref, watchEffect } from "vue";

// let num = ref(0)

// //3s后改变值
// setTimeout(() => {
//   num.value++
// }, 3000)

// watchEffect(() => {
//   console.log('num 值改变：', num.value)
// })

// import { ref, watchEffect } from "vue";

// let num = ref(0)

// //3s后改变值
// setTimeout(() => {
//   num.value++
// }, 3000)

// watchEffect((onInvalidate) => {
//   console.log(num.value)
//   onInvalidate(() => {
//     console.log('执行');
//   });
// })
import { ref, watchEffect } from "vue";

let num = ref(0)

//3s后改变值
setTimeout(() => {
  num.value++
}, 3000)

watchEffect((onInvalidate) => {
  console.log(num.value)
  onInvalidate(() => {
    console.log('执行');
  });
}, {
  flush: "post", //此时这个函数会在组件更新之后去执行
  onTrigger(e) { //作为一个调试工具，可在开发中方便调试
    console.log('触发', e);
  },
})
</script>

<style scoped>

</style>