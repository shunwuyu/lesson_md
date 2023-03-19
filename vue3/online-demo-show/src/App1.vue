<script setup>
import { reactive, nextTick } from 'vue'
import _ from 'lodash'

const state = reactive({
  headerScroll: false
})

nextTick(() => {
  const handleScroll = () => {
    console.log('/////')
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    scrollTop > 100 ? state.headerScroll = true : state.headerScroll = false
  }
  window.addEventListener('scroll', _.throttle(handleScroll, 100))
})
</script>

<template>
<header class="home-header wrap" :class="{'active' : state.headerScroll}">
  <div class="item item_logo"></div>
  <div class="item item_main"></div>
  <div class="item"></div>
  <div class="item"></div>
</header>
<div class="box" style="height:3000px;">
</div>
</template>

<style lang="stylus">
*
  margin 0
  padding 0

.home-header
  position fixed
  left 0
  top 0
  width 100% 
  height 50px
  display flex
  justify-content space-around
  align-items center
  line-height 50px
  padding 0  15px
  box-sizing border-box
  font-size 15px
  color #fff
  z-index 1000 
  transition  all .5s
  &.active
    background-color pink
    .item_logo
      transition all .3s
      width 0
  .item
    width 40px
    height 40px
    background-color green
    &.item_main
      flex 1
      background-color blue
      
</style>
