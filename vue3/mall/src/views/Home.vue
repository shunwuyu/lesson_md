<template>
<div id="home-wrapper">
    <header class="home-header wrap" :class="{'active' : state.headerScroll}">
        <router-link tag="i" to="/category"><i class="nbicon nbmenu2"></i></router-link>
        <div class="header-search">
            <span class="app-name">新蜂商城</span>
            <i class="nbicon nbSearch"></i>
            <router-link tag="span" class="search-title" to="/product-list?from=home">山河无恙，人间皆安</router-link>
        </div>
        <router-link class="login" tag="span" to="/login">登录</router-link>
    </header>
    <nav-bar />
    <swiper :list="state.swiperList"></swiper>
    <div class="category-list">
      <div v-for="item in state.categoryList" v-bind:key="item.categoryId" @click="tips">
        <img :src="item.imgUrl">
        <span>{{item.name}}</span>
      </div>
    </div>
    <div class="good">
        <header class="good-header">新品上线</header>
        <van-skeleton title :row="3" :loading="state.loading">
            <div class="good-box">
                <div class="good-item" v-for="item in state.newGoodses" :key="item.goodsId" @click="goToDetail(item)">
                    <img v-lazy="$filters.prefix(item.goodsCoverImg)"  alt="">
                    <div class="good-desc">
                    <div class="title">{{ item.goodsName }}</div>
                    <div class="price">¥ {{ item.sellingPrice }}</div>
                    </div>
                </div>
            </div>
        </van-skeleton>
    </div>
    <div class="good" :style="{ paddingBottom: '1000px'}" @scroll="doScroll">
      <header class="good-header">最新推荐</header>
      <van-skeleton title :row="3" :loading="state.loading">
        <div class="good-box">
          <div class="good-item" v-for="item in state.recommends" :key="item.goodsId" @click="goToDetail(item)">
            <img v-lazy="$filters.prefix(item.goodsCoverImg)" alt="">
            <div class="good-desc">
              <div class="title">{{ item.goodsName }}</div>
              <div class="price">¥ {{ item.sellingPrice }}</div>
            </div>
          </div>
        </div>
      </van-skeleton>
    </div>
</div>
</template>
<script setup>
import { reactive, onMounted, nextTick } from 'vue'
import navBar from '@/components/NavBar.vue'
import swiper from '@/components/Swiper.vue'
import { getHome } from '@/service/home'
import { showLoadingToast, closeToast, showToast } from 'vant'
import { useRouter } from 'vue-router'

const router = useRouter()

const state = reactive({
    headerScroll: false,
    newGoodses: [],
    recommends: [],
    swiperList: [],
    loading: true,
    categoryList: [
    {
      name: '新蜂超市',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E8%B6%85%E5%B8%82%402x.png',
      categoryId: 100001
    }, {
      name: '新蜂服饰',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E6%9C%8D%E9%A5%B0%402x.png',
      categoryId: 100003
    }, {
      name: '全球购',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E7%90%83%E8%B4%AD%402x.png',
      categoryId: 100002
    }, {
      name: '新蜂生鲜',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%94%9F%E9%B2%9C%402x.png',
      categoryId: 100004
    }, {
      name: '新蜂到家',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%88%B0%E5%AE%B6%402x.png',
      categoryId: 100005
    }, {
      name: '充值缴费',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%85%E5%80%BC%402x.png',
      categoryId: 100006
    }, {
      name: '9.9元拼',
      imgUrl: 'https://s.yezgea02.com/1604041127880/9.9%402x.png',
      categoryId: 100007
    }, {
      name: '领劵',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E9%A2%86%E5%88%B8%402x.png',
      categoryId: 100008
    }, {
      name: '省钱',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E7%9C%81%E9%92%B1%402x.png',
      categoryId: 100009
    }, {
      name: '全部',
      imgUrl: 'https://s.yezgea02.com/1604041127880/%E5%85%A8%E9%83%A8%402x.png',
      categoryId: 100010
    }
  ],
})
onMounted(async () => {
    showLoadingToast({
        message: '加载中...',
        forbidClick: true
    });
    const { data } = await getHome()
    // console.log(data)
    state.swiperList = data.data.carousels
    // console.log(data, '///')
    state.newGoodses = data.data.newGoodses
    state.recommends = data.data.recommendGoodses
    state.loading = false
    closeToast()
})

nextTick(() => {
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        scrollTop > 100 ? state.headerScroll = true : state.headerScroll = false
    })
}, true)

const doScroll = () => {
    console.log('----')
}

const goToDetail = (item) => {
  router.push({ path: `/product/${item.goodsId}` })
}

</script>
<style lang="stylus">
@import '../common/style/mixin';
.home-header
    position fixed
    left 0
    top 0
    wh(100%, 1.33333rem)
    fj()
    line-height 1.33333rem
    padding 0 .4rem
    boxSizing()
    font-size .4rem
    color #fff
    z-index 10000
    .nbmenu2
        color $primary
    &.active
        background $primary
        .nbmenu2
            color #fff
        .login
            color #fff
    .header-search
        display: flex;
        width: 74%;
        box-sizing: content-box;
        height: .53333rem;
        line-height: .53333rem;
        margin: .26667rem 0;
        padding: .13333rem 0;
        color: #232326;
        border-radius: .53333rem;
        background rgba(255, 255, 255, .7)
        .app-name
            padding 0 .26667rem
            color $primary
            font-size .5333rem
            font-weight bold
            border-right .02667rem solid #666
        .icon-search
            padding 0 .26667rem
            font-size .45333rem
        .search-title
            font-size .32rem
            color #666
            line-height .56rem
    .login
        color $primary
        line-height 1.38667rem

.category-list
    display flex
    flex-shrink 0
    flex-wrap wrap
    width 100%
    padding-bottom .34667rem
    div
        display flex
        flex-direction column
        width 20%
        text-align center
        img
            wh(.96rem, .96rem)
            margin .34667rem auto .21333rem auto

.good
    .good-header
        background #f9f9f9
        height 50px
        line-height 50px
        text-align center
        color $primary
        font-size 16px
        font-weight 500
    .good-box
        display flex
        justify-content flex-start
        flex-wrap wrap
        .good-item
            box-sizing border-box
            width 50%
            border-bottom 1px solid #e9e9e9
            padding 10px 10px
            img
                display block
                width 120px
                margin 0 auto
            .good-desc
                text-align center
                font-size .37333rem
                padding .26667rem 0
                .title
                    color #222333
                .price
                    color $primary
            &:nth-child(2n + 1)
                border-right: 1px solid #e9e9e9;
            
            
                
</style>