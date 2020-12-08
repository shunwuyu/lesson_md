<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <HelloWorld/> -->
    <hover-scale
    bigSrc="https://img.alicdn.com/imgextra/i1/1714128138/O1CN01m9gkSC29zFkBWX7um_!!1714128138.jpg"
    src="https://img.alicdn.com/imgextra/i1/1714128138/O1CN01m9gkSC29zFkBWX7um_!!1714128138.jpg_430x430q90.jpg"
    />
  </div>
</template>

<script>
import HoverScale from './components/HoverScaleImage';
export default {
  name: 'App',
  components: {
    HoverScale
  }
}
</script>

<style>
* {
  margin: 0;padding: 0;
}
</style>
