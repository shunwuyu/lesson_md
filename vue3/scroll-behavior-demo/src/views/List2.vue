<template>
    <ul>
        <li v-for="(item, index) in 50" :key="index">{{item}}</li>
    </ul>
</template>

<script setup>
import { onBeforeRouteLeave } from 'vue-router'
// import { onBeforeRouterLeave } from 'vue-router'
// onBeforeRouterLeave(() => {
//     console.log('------------------')
// })
onBeforeRouteLeave((to, from) => {
    //   const answer = window.confirm(
    //     'Do you really want to leave? you have unsaved changes!'
    //   )
    //   // 取消导航并停留在同一页面上
    //   if (!answer) return false
    // console.log(document.body.scrollTop, '///')
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