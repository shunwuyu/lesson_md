<template>
  <div class="categray">
    <div>
      <header class="category-header wrap van-hairline--bottom">
        <i class="nbicon nbfanhui" @click="goHome"></i>
        <div class="header-search">
          <i class="nbicon nbSearch"></i>
          <span class="search-title" to="./product-list?from=category">全场50元起步</span>
        </div>
        <i class="iconfont icon-More"></i>
      </header>
      <!-- <nav-bar></nav-bar> -->
      <div class="search-wrap" ref="searchWrap">
        <list-scroll :scroll-data="state.categoryData" class="nav-side-wrapper">
          <ul class="nav-side">
            <li
              v-for="item in state.categoryData"
              :key="item.categoryId"
              v-text="item.categoryName"
              :class="{'active' : state.currentIndex == item.categoryId}"
              @click="selectMenu(item.categoryId)"
            ></li>
          </ul>
        </list-scroll>
        <div class="search-content">
          <list-scroll :scroll-data="state.categoryData" >
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <template v-for="(category, index) in state.categoryData">
                  <div class="swiper-slide" v-if="state.currentIndex == category.categoryId" :key="index">
                    <!-- <img class="category-main-img" :src="category.mainImgUrl" v-if="category.mainImgUrl"/> -->
                    <div class="category-list" v-for="(products, index) in category.secondLevelCategoryVOS" :key="index">
                      <p class="catogory-title">{{products.categoryName}}</p>
                      <div class="product-item" v-for="(product, index) in products.thirdLevelCategoryVOS" :key="index" @click="selectProduct(product)">
                        <img src="//s.weituibao.com/1583591077131/%E5%88%86%E7%B1%BB.png" class="product-img"/>
                        <p v-text="product.categoryName" class="product-title"></p>
                      </div>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </list-scroll>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import listScroll from './components/ListScroll.vue'
import { ref, reactive, onMounted } from 'vue'
import { getCategory } from './service/category.js'

const searchWrap = ref(null)
const state = reactive({
  categoryData: [],
  currentIndex: 15
})

onMounted(async () => {
  let $screenHeight = document.documentElement.clientHeight
  searchWrap.value.style.height = $screenHeight - 100 + 'px'
  const { data } = await getCategory()
  console.log(data, '././......')
  state.categoryData = data
})

const selectMenu = (index) => {
  state.currentIndex = index
}

// import navBar from './components/NavBar.vue'
</script>
<style lang="stylus" scoped>
@import "./common/style/mixin.styl";
*
  margin 0
  padding 0
.categray
  .category-header
    background #fff
    position fixed
    left 0
    top 0
    fj()
    wh(100%, 1.333333rem)
    line-height 1.33333rem
    padding 0 .4rem
    color #656771
    z-index 10000
    &.active
      background: $primary;
    .icon-left
      font-size .66666rem
      font-weight bold
    .header-search
      display: flex;
      width: 80%;
      height: .53333rem;
      line-height: .53333rem;
      margin: .26667rem 0;
      padding: .133333rem 0;
      color: #232326;
      background: #F7F7F7;
      border-radius: .53333rem;
      .nbSearch
        padding 0 .266667rem 0 .53333rem
        font-size .453333rem
      .search-title {
        font-size: .32rem;
        color: #666;
        line-height: .56rem;
      }
    .icon-More
      font-size .53333rem
  .search-wrap
    fj()
    width 100%
    margin-top 1.33333rem
    background #F8F8F8
    .nav-side-wrapper
      width 28%
      height 100%
      overflow hidden
      .nav-side
        width 100%
        box-sizing border-box
        background #F8F8F8
        li
          width: 100%;
          height: 1.49333rem;
          text-align: center;
          line-height: 1.49333rem;
          font-size: .373333rem;
          &.active
            color $primary
            background #fff
  .search-content
    width: 72%;
    height: 100%;
    padding: 0 .266667rem;
    background: #fff;
    overflow-y: scroll;
    touch-action: pan-y;
    box-sizing border-box
    .swiper-container
      width: 100%;
      .swiper-slide
        width: 100%;
        .category-main-img
          width: 100%
        .category-list
          display: flex;
          flex-wrap: wrap;
          flex-shrink: 0;
          width: 100%;
          .catogory-title
            width: 100%;
            font-size: .453333rem;
            font-weight: 500;
            padding: .53333rem 0;
          .product-item
            width: 33.3333%;
            margin-bottom: .266667rem;
            text-align: center;
            font-size: .4rem;
            .product-img
              wh(.8rem, .8rem)
</style>