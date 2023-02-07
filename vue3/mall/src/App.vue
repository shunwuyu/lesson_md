<template>
<div class="wrapper" >

</div>
</template>
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
    document.body.addEventListener('scroll', () => {
        console.log('////')
    })
})
</script>
<style lang="stylus">
.wrapper
    height 10000px
</style>