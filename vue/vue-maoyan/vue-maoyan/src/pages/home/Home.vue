<template>
  <div>
  	<common-header :title="title" :back="true" @goBack="goBack"></common-header>
    <nav-menu :menu-active="menuActive" @changeMenu="changeMenu"></nav-menu>
    <movie-content :menu-active="menuActive"></movie-content>
    <common-footer :bottom-active="bottomActive"></common-footer>
  </div>
</template>

<script>
import CommonHeader from '../../components/header/Header'
import CommonFooter from '../../components/footer/Footer'
import NavMenu from './components/nav-menu/NavMenu'
import MovieContent from './components/content/Content'
export default {
  name: 'Home',
  components: {
    CommonHeader,
    NavMenu,
    MovieContent,
    CommonFooter
  },
  data () {
    return {
      title: '首页',
      menuActive: 0,
      bottomActive: 0
    }
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    changeMenu(menuId) {
      this.menuActive = menuId;
    }
  }
}
</script>
<style>
</style>