<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <slide-searchbar :ifShowSearchPage="ifShowSearchPage"/>
    <!-- <div style="margin-top: 94px;"> -->
      <!-- <button @click="handleToggle">切换</button> -->
    <!-- <router-view/> -->
    <!-- </div> -->
    <div class="main">
<ul>
  <li>123</li>
  <li>123</li>
  <li>123</li>
  <li>123</li>
  <li>123</li>
  <li>123</li>
  <li>123</li>
  <li>123</li>
  <li>123</li>
  <li>123</li>
  <li>123</li>
  <li>123</li>
  <li>123</li>
  <li>123</li>
  <li>123</li>
</ul>
</div>
  </div>
</template>

<script>
import SlideSearchbar from './components/SlideSearchBar/index';
export default {
  name: 'App',
  data() {
    return {
      ifShowSearchPage: false
    }
  },
  components: {
    SlideSearchbar
  },
  methods: {
    handleToggle() {
      this.ifShowSearchPage = !this.ifShowSearchPage
    }
  },
  mounted: function() {
    // console.log(document.querySelector('.main'))
    const main = document.querySelector('.main');
    main.addEventListener('scroll', () => {
      if (main.scrollTop > 10) {
        this.ifShowSearchPage = true;
      }
      if (main.scrollTop === 0) {
        this.ifShowSearchPage = false;
      }
    })
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}
.main {
  height: calc(100vh - 94px);
  overflow: scroll;
}
li:not(:first-child) {
  margin-top: 40px;
}
</style>
