<template>
    <div>

    </div>
</template>

<script setup lang="ts">
// import { ref, watch } from "vue";
// const str = ref('彼时彼刻')
// setTimeout(() => { str.value = '恰如此时此刻' }, 3000)
// watch(str, (newV, oldV) => {
//   console.log(newV, oldV) //恰如此时此刻 彼时彼刻
// })
// import { ref, watch } from "vue";

// let name = ref('树哥')
// let age = ref(18)

// //3s后改变值
// setTimeout(() => {
//   name.value = '我叫树哥'
//   age.value = 19
// }, 3000)

// watch([name, age], (newV, oldV) => {
//   console.log(newV, oldV) // ['我叫树哥', 19]  ['树哥', 18]
// })

// import { reactive, watch } from "vue";

// let info = reactive({
//   name: '树哥',
//   age: 18
// })

// //3s后改变值
// setTimeout(() => {
//   info.age = 19
// }, 3000)
// // 当 watch 监听的是一个响应式对象时，
// // 会隐式地创建一个深层侦听器，
// // 即该响应式对象里面的任何属性发生变化，
// // 都会触发监听函数中的回调函数。
// // 即当 watch 监听的是一个响应式对象时，
// // 默认开启 deep：true
// watch(info, (newV, oldV) => {
//   console.log(newV, oldV) 
// })

// import { reactive, watch } from "vue";

// let info = reactive({
//   name: '树哥',
//   age: 18
// })

// //3s后改变值
// setTimeout(() => {
//   info.age = 19
// }, 3000)


// // watch(info.age, (newV, oldV) => {
// //   console.log(newV, oldV) 
// // })
// watch(()=>info.age, (newV, oldV) => {
//   console.log(newV, oldV) // 19 18
// })

import { reactive, watch } from "vue";

let info = reactive({
  name: '张麻子',
  age: 18,
  obj: {
    str: '彼时彼刻，恰如此时此刻'
  }
})

//3s后改变s值
setTimeout(() => {
  info.obj.str = 'to be or not to be'
}, 3000)

// 需要自己开启 deep:true深度监听,不然不发触发 watch 的回调函数
watch(() => info.obj, (newV, oldV) => {
  console.log(newV, oldV)
}, {
  deep: true
})

</script>

<style scoped>

</style>