<template>
  <VirtualList :listData="data" :estimatedItemSize="100"  v-slot="slotProps">
    <ListItem :item="slotProps.item" />
  </VirtualList>
</template>

<script>
import VirtualList from './components/VirtualList.vue'
import ListItem from './components/ListItem.vue'

import faker from 'faker';

let data = [];
for (let id = 0; id < 1000; id++) {
  data.push({
    id,
    value: faker.lorem.sentences() // 长文本
  })
}

export default {
  name: 'app',
  data(){
    return {
      data
    };
  },
  components: {
    VirtualList,
    ListItem
  }
}
</script>

<style>
html{
  height: 100%;
}
body{
  height: 100%;
  margin:0;
}
#app{
  height:100%;
}

</style>
