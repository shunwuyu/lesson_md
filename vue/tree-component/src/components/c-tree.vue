<template>
 <div class="tree-menu">
    <ul v-for="item in data" :key="item.name">
      <c-tree-item :data="item"></c-tree-item>
    </ul>
</div>
</template>
<script>
import cTreeItem from './tree-item'
export default {
  props: {
    data: {
      type: [Object, Array],
      required: true
    }
  },
  components: {
    cTreeItem
  }
}
</script>