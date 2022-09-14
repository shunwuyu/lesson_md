<template>
<div>
  <router-link to="/">首页</router-link> | 
  <router-link to="/about">关于</router-link>
</div>
<div>
  <button @click="loading">123</button>
  <h1 @click="toggle">click</h1>
  <h2>你的评分是 {{score}}</h2>
  <Rate v-model="score"></Rate>
  <!-- <Rate :value="score" @update-rate="update">课程评分</Rate> -->
  <Rate :value="4" theme="red">
    <img width="14" src="/vite.svg">
  </Rate>
  <Rate :value="1" theme="green"></Rate>
</div>
<!-- <router-view></router-view> -->
<router-view v-slot="{ Component }">  
  <transition  name="route" mode="out-in">   
    <component :is="Component" />  
  </transition>
</router-view>
</template>
<script setup>
// import Counter from './components/Counter';
import { useFullscreen } from '@vueuse/core';
import useFavicon from './utils/favicon'
import {reactive,computed,watchEffect, ref} from 'vue';
import Rate from './components/Rate.vue'
let score = ref(3)

const { isFullscreen, enter, exit, toggle } = useFullscreen()

let obj = reactive({ count:1})
let double = computed(()=>obj.count*2)
obj.count = 2
let { favicon } = useFavicon()
function loading() {
  favicon.value = '/logo_pc@2x.webp'
}
function update(num) {
  score.value = num;
}
watchEffect(()=>{ console.log('数据被修改了',obj.count,double.value)})
</script>