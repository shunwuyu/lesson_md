<template>
<div class="WaterfallList" ref="wrapper">
    <div class="WaterfallContent" ref="content">
        <div class="WaterfallItem" v-for="(item, index) in list" :key="index">
            <slot name="item" :index="index" :item="item"></slot>
        </div>
    </div>
</div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps({
    list: {
        type: Array,
        default:[]
    },
    columnWidth: {
        type: Number,
        default: 240
    },
    columnGap: {
        type: Number,
        default: 24
    }
})

const wrapper = ref(null);
const content = ref(null);
const flowHeight = [];

const getColumnCount = () => {
  if (!wrapper.value) return 0;
  const itemW = props.columnWidth + props.columnGap;
//   console.log(itemW)
    // console.log(wrapper.value.offsetWidth, '----')
  const num = (wrapper.value.offsetWidth + props.columnGap) / itemW;
  return Math.min(Math.floor(num), props.list.length);
};

const flowDraw = () => {
    if (!content.value) return;
    const columnCount = getColumnCount();
    // console.log(columnCount)
    flowHeight.length = columnCount;
    for (let i = 0; i < columnCount; i++) {
        flowHeight[i] = 0;
    }
    const itemW = props.columnWidth + props.columnGap;
    content.value.style.width = itemW * columnCount - props.columnGap + 'px';
    const doms = content.value.querySelectorAll('.WaterfallItem');
    doms.forEach((dom) => {
        const minIdx = getMinIndex(flowHeight);
        dom.style.width = '240px';
        dom.style.left = `${minIdx * itemW}px`;
        dom.style.top = `${flowHeight[minIdx]}px`;
        flowHeight[minIdx] += dom.offsetHeight;
    });
    content.value.style.height = Math.max(...flowHeight) + 'px';
}

const getMinIndex = (list) => {
  const min = Math.min(...list);
  return list.indexOf(min);
};

onMounted(() => {
    flowDraw();
})
// console.log(props)
</script>
<style>
.WaterfallContent {
    margin-left: auto;
  margin-right: auto;
  position: relative;
  width:100%;
}
  

.WaterfallItem {
    padding-bottom: 24px;
  
  position: absolute;
  top: 0;
  left: 0;
}
img {
    /* max-width: 100%; */
    width: 0px;
}
  

</style>