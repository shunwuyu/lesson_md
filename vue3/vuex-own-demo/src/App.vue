<template>
  <div>
    {{count}}
    <button @click="add">+1</button>
  </div>
</template>
<script setup>
import { computed } from 'vue'
import { useStore } from './store/gvuex'
let store = useStore();
let count = computed(() => store.state.count)
function add() {
  store.commit('add')
}
</script>