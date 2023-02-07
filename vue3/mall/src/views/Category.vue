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
                <router-link tag="span" class="search-title" to="./product-list?from=category">全场50元起步</router-link>
                </div>
                <i class="iconfont icon-More"></i>
            </header>
            <nav-bar></nav-bar>
        </div>
    </div>
</template>

<script setup>
import navBar from '@/components/NavBar.vue'
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

</style>