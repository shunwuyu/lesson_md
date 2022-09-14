<template>
    <div class="box" :style="{width:width+'px'}"></div> 
    <button @click="change">click</button>
    <button @click="toggle">click</button>  
    <transition name="fade">
        <h1 v-if="showTitle">你好 Vue 3</h1>
    </transition>
</template>
<script setup>
import {ref} from 'vue'
let width= ref(100)
let showTitle = ref(true)
function change(){ width.value += 100}
function toggle(){ showTitle.value = !showTitle.value}
</script>
<style>
/* .box{  background:red;  height:100px;transition: width 1s linear;} */
.box {
    width:30px;  height:30px;  position: relative;  background:#d88986;  animation: move 2s linear infinite;
}
@keyframes move {  0% {left:0px}  50% {left:200px}  100% {left:0}}
.fade-enter-active,.fade-leave-active { transition: opacity 2s linear;}.fade-enter-from,.fade-leave-to { opacity: 0;}
</style>