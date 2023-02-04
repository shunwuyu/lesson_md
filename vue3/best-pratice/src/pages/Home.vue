<template>
<div @click="add">
    Home
    {{count}}
</div>
</template>
<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore();
let count = computed(()=>store.state.count)

function add() {
    store.commit('add')
}

</script>
