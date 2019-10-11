<template>
  <div id="app">
    <TextBe/>
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/circle-progress'
import TextBe from './components/TextBe'
export default {
  name: 'App',
  components: {
    HelloWorld,
    TextBe
  },
  
}
</script>

<style>

</style>
