<script setup>
import TodoList from './components/TodoList.vue'
import useFavicon from './hooks/useFavicon.js'
import { computed, ref } from 'vue'
import {useStore} from 'vuex'
import { useFullscreen } from '@vueuse/core'
let width= ref(100)
function change(){  width.value += 100}
const { isFullscreen, enter, exit, toggle } = useFullscreen()
let store = useStore()
let count = computed(()=>store.state.count)
function add(){ store.commit('add')}
let {favicon}  = useFavicon() 
function loading(){  
   favicon.value = '/geek.webp'
}
let showTitle = ref(true)
function toggleit(){  showTitle.value = !showTitle.value}
</script>

<template>
<div>
  <div class="box" :style="{width:width+'px'}"></div> 
   <button @click="change">click</button>
  <h1 @click="toggle">click</h1>
  <router-view></router-view>
  <div @click="add">
    {{count}}
  </div>
  <TodoList />
  <button @click="loading">2</button>
  <button @click="toggleit">click</button>  
  <transition name="fade">
    <h1 v-if="showTitle">你好 Vue 3</h1>
  </transition>
</div>

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box{  background:red;  height:100px;transition: width 1s linear;}
.fade-enter-active,.fade-leave-active {  transition: opacity 0.5s linear;}.fade-enter-from,.fade-leave-to {  opacity: 0;}
</style>
