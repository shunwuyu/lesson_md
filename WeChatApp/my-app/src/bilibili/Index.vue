<template>
<div id="home">
  <div class="homeMain">
    <vHead></vHead>
  </div>
</div>
</template>
<script>
import vHead from './header.vue'
export default {
  components:{
    vHead
  }
}
</script>
<style>
.content {
  zoom:1;
}
.container-top-wrapper::after{
  content: '';
  display: block;
  visibility: hidden;
  height: 0;
  clear: both;
  font-size: 0;
}
.container-top {
  padding: 0;
  margin: 0 auto;
  margin-bottom: 20px;
  zoom: 1;
  width: 980px
}
</style>
