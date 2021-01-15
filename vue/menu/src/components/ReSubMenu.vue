<template>
  <SubMenu>
    <template #title>{{data.title}}</template>
    <MenuItem
      v-for="child in data.children"
      :key="child.id"
      v-if="!child.children"
      >
      {{child.title}}
    </MenuItem>
    <ReSubMenu v-else :data="child">
    </ReSubMenu>
  </SubMenu>
</template>
<script>
import MenuItem from './MenuItem'
import SubMenu from './SubMenu'
export default {
  name: "ReSubMenu",
  props: ["data"],
  components: {
    MenuItem,
    SubMenu
  }
}
</script>