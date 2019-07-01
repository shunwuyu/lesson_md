<template>
  <div>
    <counter :count="count" v-on:increment="incrementCount"
    v-on:decrease="decreaseCount"
    />
    <counter-brother :count="count"/>
  </div>
</template>

<script>
import Counter from './Counter';
import CounterBrother from './CounterBrother';
export default {
  name: 'App',
  data() {
    return {
      count: 0
    }
  },
  methods: {
    incrementCount () {
      this.count++
    },
    decreaseCount () {
      this.count--;
    }
  },
  components: {
    'counter': Counter,
    'counter-brother': CounterBrother
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
