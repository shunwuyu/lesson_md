<!-- 景点页票类票价详情组件 -->
<template>
  <div class="list">
    <div
      class="list-item"
      v-for="(item, index) of list"
      :key="index"
    >
      <div class="item-title border-bottom">
        <span class="price-icon"></span>
        <span class="price-title">{{item.name}}</span>
      </div>
      <div v-if="item.children" class="children-list">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";
@import "~styles/mixins.scss";

.list {
  display: flex;
  flex-direction: column;
  .list-item {
    .item-title {
      display: relative;
      height: .64rem;
      line-height: .64rem;
      .price-icon {
        width: .36rem;
        height: .36rem;
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
        background-size: .4rem 3rem;
        display: inline-block;
        position: absolute;
        top: .14rem;
        left: .18rem;
      }
      .price-title {
        margin-left: .7rem;
      }
    }
    .children-list {
      margin-left: .5rem;
    }
  }
}
</style>
