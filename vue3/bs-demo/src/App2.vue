<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import BScroll from '@better-scroll/core'
import ObserveDOM from '@better-scroll/observe-dom'
BScroll.use(ObserveDOM)
const nums = ref(30)
const innerLeft = ref('0px')
let wrapperWidth = 0
let contentWidth = 0
let bs = null
let scroll = ref(null)
let content = ref(null)
onMounted(() => {
  wrapperWidth = scroll.value.offsetWidth;
  contentWidth = content.value.offsetWidth;
  console.log(wrapperWidth)
  bs = new BScroll(scroll.value, {
          probeType: 3,
          observeDOM: true,
          scrollX: true,
          scrollY: false
  })
  bs.on("scroll", position => {
    console.log(position, '----///----------')
    let percent = Math.abs(position.x)/(contentWidth - wrapperWidth)
    // console.log(percent);
    let leftChange = percent * (30)
    // console.log(leftChange)
    innerLeft.value = `${leftChange}px`
  })
})
const handleClick = () => {
  nums.value += 10
}
onUnmounted(() => {
  bs.destroy()
})

</script>

<template>
<div class="observe-dom-container">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content" ref="content">
        <div class="scroll-item" v-for="num in nums" :key="num">{{nums - num + 1}}</div>
      </div>
      <div class="pointerWrapper">
        <div class="inner" :style="{left: innerLeft}"></div>
      </div>
    </div>
    <button class="btn" @click="handleClick">append two children element</button>
  </div>
</template>

<style lang="stylus">
.observe-dom-container
  text-align center
  .scroll-wrapper
    width 90%
    margin 80px auto
    white-space nowrap
    border 3px solid #42b983
    border-radius 5px
    // overflow-x scroll
    overflow hidden
    position relative
    .scroll-content
      display inline-block
      .scroll-item
        height 50px
        line-height 50px
        font-size 24px
        display inline-block
        text-align center
        padding 0 20px
        &:nth-child(2n)
          background-color #C3D899
        &:nth-child(2n+1)
          background-color #F2D4A7
    .pointerWrapper
      position absolute
      bottom: 2px;
      width: 40px;
      height: 10px;
      background red
      left 50%
      margin-left -20px
      .inner
        transition: all .2s
        position absolute
        background white
        width 10px
        height 100%
        
        

</style>
