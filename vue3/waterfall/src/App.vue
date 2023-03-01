<script setup>
import { reactive, onMounted } from 'vue'
import { getGoods } from './service/goods'
import GoodsItem from './components/GoodsItem.vue'

const heights = [0, 0]
const state = reactive({
  goods: [],
  leftGoods:[],
  rightGoods:[]
})

onMounted(async () => {
  state.goods = await getGoods();
  // console.log(data)
  
  const getMinHeight = () => {
    let minHeight = Math.min(...heights);
    return heights.indexOf(minHeight)
  }
  // console.log(getMinHeight(), '-----')
  const leftGoods = [];
  const rightGoods = [];
  for (let i = 0; i < state.goods.length; i++) {
    let minHeightIndex = getMinHeight()
    if ( minHeightIndex == 0) {
      leftGoods.push(state.goods[i])
    } else {
      rightGoods.push(state.goods[i])
    }
    heights[minHeightIndex] += state.goods[i].height
  }
  // console.log(leftGoods, rightGoods)
  state.leftGoods = leftGoods
  state.rightGoods = rightGoods
})

</script>

<template>
<div class="page">
  <header></header>
  <main class="wrapper">
    <div class="col">
      <GoodsItem v-for="item in state.leftGoods" :goods="item"></GoodsItem>
    </div>
    <div class="col">
      <GoodsItem v-for="item in state.rightGoods" :goods="item"></GoodsItem>
    </div>
  </main>
  <footer></footer>
</div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



.page {
  display: flex;
  flex-direction: column;
  height: 100vh;
}
header, footer {
  height: 1rem;
}
main.wrapper {
  padding: 0 .266666rem;
  flex: 1;
  background-color: red;
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.col {
  height: 100%;
  width: 48%;
  background-color: yellow;
  overflow-y: scroll;
}
</style>
