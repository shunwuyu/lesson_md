<script setup>
 import child from "./child3.vue"
import { ref, reactive } from "vue"
const msg1 = ref('信息1')
const msg2 = ref("这是传给子组件的信息2")
    // 或者复杂类型
    // const msg2 = reactive(["这是传级子组件的信息2"])
const onMyClick = (msg) => {
    console.log(msg, '/////') // 这是父组件收到的信息
}
</script>

<template>
  <child :msg1="msg1" :msg2="msg2" @myClick="onMyClick"></child>
</template>

<style scoped>
</style>
