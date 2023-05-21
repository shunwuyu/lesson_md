<template>
  <div class="app">
    <Parabola></Parabola>
  </div>
</template>

<script>
import Parabola from './components/Parabola.vue';

export default {
  name: 'App',
  components: {
    Parabola,
  },
};
</script>

<style>
.app {
  padding: 50px;
}
</style>