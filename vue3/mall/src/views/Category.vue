<!--
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 *
-->
<template>
    <div class="categray">
        <div>
            <header class="category-header wrap van-hairline--bottom">
                <i class="nbicon nbfanhui" @click="goHome"></i>
                <div class="header-search">
                <i class="nbicon nbSearch"></i>
                <router-link tag="span" class="search-title" to="/product-list?from=category">全场50元起步</router-link>
                </div>
                <i class="iconfont icon-More"></i>
            </header>
            <nav-bar></nav-bar>
            <div class="search-wrap" ref="searchWrap">
                <list-scroll class="nav-side-wrapper">
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
                    <list-scroll >
                        <div class="swiper-container">
                            <div class="swiper-wrapper">
                                <div v-for="(category, index) in state.categoryData">
                                    <div class="swiper-slide" v-if="state.currentIndex == category.categoryId" :key="index">
                                        <img class="category-main-img" :src="category.mainImgUrl" v-if="category.mainImgUrl"/>
                                        <div class="category-list" v-for="(products, index) in category.secondLevelCategoryVOS" :key="index">
                                        <p class="catogory-title">{{products.categoryName}}</p>
                                        <div class="product-item" v-for="(product, index) in products.thirdLevelCategoryVOS" :key="index" @click="selectProduct(product)">
                                            <img src="//s.weituibao.com/1583591077131/%E5%88%86%E7%B1%BB.png" class="product-img"/>
                                            <p v-text="product.categoryName" class="product-title"></p>
                                        </div>
                                        </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </list-scroll>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import navBar from '@/components/NavBar.vue'
import listScroll from '@/components/ListScroll.vue'
import { showLoadingToast, closeToast, showToast } from 'vant'
import { getCategory } from '@/service/goods'

const router = useRouter()
const state = reactive({
    categoryData: [],
    currentIndex: 15,
    loading: true,
})

onMounted(async () => {
    showLoadingToast({
        message: '加载中...',
        forbidClick: true
    });
    const { data } = await getCategory()
    state.categoryData = data
    state.loading = false
    closeToast()
})

const selectMenu = (index) => {
    state.currentIndex = index
}
const goHome = () => {
  router.push({ path: 'home' })
}
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin';
.categray
    .category-header
        background #fff
        position fixed
        left 0
        top 0
        fj()
        wh(100%, 1.33333rem);
        line-height 1.33333rem
        padding 0 0.4rem
        font-size: .4rem;
        color: #656771;
        z-index: 10000;
        .header-search
            display: flex;
            width: 80%;
            height: .53333rem;
            line-height: .53333rem;
            box-sizing: content-box;
            margin: .26667rem 0;
            padding: .13333rem 0;
            color: #232326;
            background: #F7F7F7;
            border-radius: .53333rem;
            .nbSearch
                padding: 0 .26667rem 0 .53333rem;
                font-size: .45333rem;
            .search-title
                font-size: .32rem;
                color: #666;
                line-height: .56rem;
        .icon-More
            font-size .53333rem
    .search-wrap
        fj()
        width 100%
        height 100vh
        margin-top 50px
        background #F8F8F8
        .nav-side-wrapper
            width: 28%;
            height: 100%;
            overflow: hidden;
            .nav-side
                width: 100%;
                background: #F8F8F8;
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
        padding: 0 .26667rem;
        background: #fff;
        overflow-y: scroll;
        touch-action: pan-y;
        .swiper-container
            width: 100%;
            .swiper-slide
                width: 100%;
                .category-main-img
                    width: 100%;
                .category-list
                    display: flex;
                    flex-wrap: wrap;
                    flex-shrink: 0;
                    width: 100%;
                    .catogory-title
                        width: 100%;
                        font-size: .45333rem;
                        font-weight: 500;
                        padding:  .53333rem 0;
                    .product-item
                        width: 33.3333%;
                        margin-bottom: .26667rem;
                        text-align: center;
                        font-size: .4rem;
                        .product-img
                            wh(.8rem, .8rem);

</style>