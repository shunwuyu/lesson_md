<template>
    <div class="scroll-wrapper">
        <slot></slot>
    </div>
</template>

<script setup>
import { onMounted, nextTick, onUpdated } from 'vue'
import BScroll from 'better-scroll'
let bs

onMounted(() => {
    nextTick(() => {
        initScroll()
    })
})

onUpdated(() => {
    bs.refresh()
})

const initScroll = () => {
    // console.log(document.querySelector('.scroll-wrapper'))
    bs = new BScroll(document.querySelector('.scroll-wrapper'), {
        probeType: 3,
        click: true
    })
    bs.on('scroll', () => {
        console.log('scrolling-')
    })
    bs.on('scrollEnd', () => {
        console.log('scrollingEnd')
    })
}
</script>

<style lang="stylus" scoped>

</style>