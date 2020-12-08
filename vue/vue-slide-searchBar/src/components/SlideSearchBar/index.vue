<template>
  <!-- 'hide-shadow': !ifHideShadow -->
  <div class="title-search-wrapper"
  :class="{'show-search': ifShowSearchPage, 'hide-shadow': !ifShowSearchPage}">
    <!-- <transition name="title"> -->
      <div class="title-search-page-wrapper" v-show="!ifShowSearchPage">
        <span class="title-text">标题</span>
        <div class="icon-shake-wrapper">&gt;</div>
      </div>
    <!-- </transition> -->
    <div class="icon-back-wrapper" :class="{'show-search': ifShowSearchPage}">
      <span>&lt;</span>
    </div>
    <div class="search-wrapper" :class="{'show-search': ifShowSearchPage}">
      <input type="text" class="search" :class="{'show-search': ifShowSearchPage}" placeholder="搜点什么东西吧" />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    ifShowSearchPage: {
      type: Boolean,
      default: false
    }
  }
};
</script>
<style scoped>
.title-search-wrapper {
  z-index: 110;
  width: 100%;
  height: 94px;
  background-color: white;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  transition: all 0.2s linear;
}
.title-search-wrapper.show-search {
  height: 52px;
}
.title-search-wrapper.hide-shadow {
  box-shadow: none;
}
.title-search-page-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 105;
  width: 100%;
  height: 42px;
  text-align: center;
}
.title-text {
  font-weight: bold;
}
.icon-shake-wrapper {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 110;
  padding-right: 10px;
  height: 100%;
}
/* icon back */
.icon-back-wrapper {
  position: absolute;
  left: 10px;
  top: 0;
  z-index: 110;
  height: 42px;
  transition: all 0.2s linear;
}
.icon-back-wrapper.show-search {
  height: 52px;
}
/*  */
.search-wrapper {
  position: absolute;
  top: 42px;
  left: 0;
  z-index: 100;
  display: flex;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  transition: all 0.2s linear;
}
.search-wrapper.show-search {
  top: 0;
  left: 40px;
}
/*  */
.search {
  border: 1px solid #eee;
  color: #666;
  width: 100%;
  height: 22px;
  background: transparent;
  font-size: 12px;
  margin-left: 10px;
  padding: 4px;
  border-radius: 5px;
}
.search.show-search {
  width: 80%;
}
.search:focus {
  outline: none;
}
.search::-webkit-input-placeholder {
  color: #ccc;
}
</style>