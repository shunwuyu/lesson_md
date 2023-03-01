<template>
<div ref="wrapper" class="scroll-wrapper">
    <slot></slot>
</div>
</template>
<script setup>
import BScroll from 'better-scroll'
import { onMounted, nextTick, ref, onUpdated } from 'vue'
let bs = null;
let wrapper = ref(null)
onMounted(() => {
    nextTick(() => {
        initScroll()
    })
})
onUpdated(() => {
    bs.refresh()
})
const initScroll = () => {
    bs = new BScroll( wrapper.value, {
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
<style lang="stylus">
.scroll-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    touch-action: pan-y;
}
</style>