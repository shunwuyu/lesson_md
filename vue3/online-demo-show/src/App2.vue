<template>
    <div>
        <p class="name">{{ name }}</p>
        <button @click="modify">修改</button>
    </div>
</template>

<script setup>
import { ref, nextTick } from 'vue'
const name = ref("111");

const modify = () => {
    // nextTick本质就是创建了一个微任务（不考虑setTimeout），
    // 将其回调推入微任务队列。vue中一个事件循环中的所有dom
    // 更新操作也是一个微任务，两者属于同一优先级，执行先
    // 后只于入队的先后有关
    name.value = "222"
    // const text = document.querySelector('.name').innerText
    // console.log(text)
    nextTick(() => {
        const text = document.querySelector('.name').innerText
        console.log(text)
    })
    name.value = "333";
}
</script>

<style scoped>

</style>