<template>
  <div class="main-content">
    <Header></Header>
    <Slide></Slide>
    <div class="content">
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
import Header from '../common/Header.vue'
import Slide from '../common/Slide.vue'
export default {
  name: 'mainContent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Header,
    Slide
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
  padding-left: 200px;
}
</style>
