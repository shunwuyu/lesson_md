<template>
    <ul>
        <li v-for="(item, index) in 50" :key="index">{{item}}</li>
    </ul>
</template>

<script setup>
import { onActivated, onMounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

onMounted(() => {
    console.log('||||||||')
})

onActivated(() => {
    // console.log('--------')
    if (localStorage.getItem('scroll')) {
        window.scrollTo(0, parseInt(localStorage.getItem('scroll')))
    }
})

onBeforeRouteLeave(() => {
    localStorage.setItem('scroll', document.documentElement.scrollTop)
})
</script>

<style scoped>
li {
    height: 50px;
    line-height: 50px;
    text-align: center;
}
</style>