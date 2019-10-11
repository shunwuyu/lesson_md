<template>
  <div id="app">
    <ec-slide :list='list' :autoplay="true" :type="'slide'" :option="true" :time="1000" 
    :swidth="800"
    :sildetype="'ease'" :arrowurl="'http://i1.buimg.com/1949/4d860a3067fab23b.jpg'" :arrowsize="'20,40'" :direction="'left'"></ec-slide>
  </div>
</template>

<script>
import EcSlide from './components/EcSlide'
export default {
  name: 'App',
  data () {
    return {
      list: [
        {
          href: 'https://36kr.com/p/5245067',
          src: 'https://pic.36krcnd.com/201909/12030204/a6myzaob5uyszomn!heading'
        },
        {
          href: 'https://36kr.com/p/5245731',
          src: 'https://pic.36krcnd.com/201909/12000217/fggsu2ypi9t4011a!heading'
        },
        {
          href: 'https://36kr.com/p/5245740',
          src: 'https://pic.36krcnd.com/201909/11234002/cdcyqxr4mh1lrexo!heading'
        },
      ]
    }
  },
  components: {
    EcSlide
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
