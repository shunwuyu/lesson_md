<template>
  <div class="index">
    <div class="search">
      <div @click="toMappage">{{cityName}}</div>
      <div @click="toSearch">
        <input type="text" placeholder="搜索商品">
        <span class="icon"></span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="stylus" scoped>
@import "./style.styl";
</style>