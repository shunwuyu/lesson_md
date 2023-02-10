<template>
<div class="product-list-wrap">
    <div class="product-list-content">
        <header class="category-header wrap">
            <i class="nbicon nbfanhui" @click="goBack"></i>
            <div class="header-search">
                <i class="nbicon nbSearch"></i>
                <input
                    type="text"
                    class="search-title"
                    v-model="state.keyword"/>
            </div>
            <span class="search-btn" @click="getSearch">搜索</span>
        </header>
        <van-tabs type="card" color="#1baeae" @click-tab="changeTab" >
            <van-tab title="推荐" name=""></van-tab>
            <van-tab title="新品" name="new"></van-tab>
            <van-tab title="价格" name="price"></van-tab>
        </van-tabs>
        <div class="content">
            <van-pull-refresh v-model="state.refreshing" @refresh="onRefresh" class="product-list-refresh">
            </van-pull-refresh>
        </div>
    </div>
</div>
</template>

<script setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { search } from '@/service/goods'

const route = useRoute()
const router = useRouter()

const state = reactive({
  keyword: route.query.keyword || '',
  page: 1,
  loading: true,
  finished: false,
  refreshing: true,
  productList: [],
  totalPage: 0,
  orderBy: ''
})

const goBack = () => {
  router.go(-1)
}

const getSearch = () => {
    console.log('get search-----')
    onRefresh()
}

const onRefresh = () => {
  state.refreshing = true
  state.finished = false
  state.loading = true
  state.page = 1
  onLoad()
}

const onLoad = () => {
  if (!state.refreshing && state.page < state.totalPage) {
    state.page = state.page + 1
  }
  if (state.refreshing) {
    state.productList = [];
    state.refreshing = false;
  }
  init()
}

const changeTab = ({ name }) => {
  console.log('name', name)
  state.orderBy = name
  onRefresh()
}

const init = async () => {
    const { categoryId } = route.query
    console.log(categoryId, '////')
    if (!categoryId && !state.keyword) {
      state.finished = true
      state.loading = false;
      return
    }
    console.log({ pageNumber: state.page, goodsCategoryId: categoryId, keyword: state.keyword, orderBy: state.orderBy })

    const { data, data: { list } } = await search({ pageNumber: state.page, goodsCategoryId: categoryId, keyword: state.keyword, orderBy: state.orderBy })
}

</script>

<style lang="stylus" scoped>
@import '../common/style/mixin';
.product-list-content
    position fixed
    left 0
    top 0
    width 100%
    z-index 1000
    background #fff
    .category-header
        fj()
        width 100%
        height 1.33333rem
        line-height 1.33333rem
        padding 0 .4rem
        font-size .4rem
        color #656771
        z-index 10000
        &.active
            background $primary
        .icon-left
            font-size 25px
            font-weight bold
        .header-search
            display flex
            width 76%
            line-height .53333rem
            margin .26666rem 0
            padding .13333rem 0
            color #232326
            background #f7f7f7
</style>