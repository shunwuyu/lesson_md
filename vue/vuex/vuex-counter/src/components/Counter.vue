<template>
  <div>
    {{$store.state.count}}  times, 
    <button 
    @click="increment">+</button>
  </div>
</template>
<script>
export default {

  methods: {
    increment () {
      
    }
  }
}
</script>
<style>
</style>