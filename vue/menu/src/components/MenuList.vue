<template>
  <Menu>
    <template v-for="menu in data" >
      <MenuItem :key="menu.id" v-if="!menu.children">
      {{menu.title}}
      </MenuItem>
      <ReSubMenu :key="menu.id" :data="menu" v-else>
      </ReSubMenu>
    </template>
  </Menu>
</template>
<script>
import Menu from './Menu';
import MenuItem from './MenuItem';
import ReSubMenu from './ReSubMenu';
export default {
  props: {
    data: {
      type: Array,
      default: () => ([])
    }
  },
  components: {
    Menu,
    MenuItem,
    ReSubMenu
  }
}
</script>
<style>
  
</style>