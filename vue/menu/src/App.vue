<template>
  <div id="app">
    
    <MenuList :data="menuList">
    </MenuList>
  </div>
</template>

<script>
import MenuList from './components/MenuList'
import axios from 'axios';
import menuData from './assets/menu.js'
// console.log(menu)
export default {
  name: 'App',
  data () {
    return {
      menuList: menuData
    }
  },
  components: {
    MenuList
  }
}
</script>

<style>

</style>
