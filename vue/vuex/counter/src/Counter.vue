<template>
  <div id="app">
    Clicked: {{ count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>
<script>
export default  {
  data () {
    return {
      // count: 0
    }
  },
  props: ['count'],
  computed: {
    evenOrOdd () {
      return this.count % 2 === 0 ? 'even': 'odd';
    }
  },
  methods: {
    increment () {
      this.$emit('increment');
      // this.count++;
    },
    decrement () {
      // this.count--;
      this.$emit('decrease');
    },
    incrementIfOdd () {
      if (this.count % 2 === 1) {
        // this.count++;
        this.$emit('increment');
      }
    },
    incrementAsync () {
      setTimeout(()=>{
        // this.count++;
        this.$emit('increment');
      }, 2000)
    }
  }
}
</script>
<style>
  
</style>