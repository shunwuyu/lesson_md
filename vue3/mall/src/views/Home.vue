<template>
<div>
    <header class="home-header wrap">
        <router-link tag="i" to="./category"><i class="nbicon nbmenu2"></i></router-link>
        <div class="header-search">
            <span class="app-name">新蜂商城</span>
            <i class="nbicon nbSearch"></i>
            <router-link tag="span" class="search-title" to="./product-list?from=home">山河无恙，人间皆安</router-link>
        </div>
        <router-link class="login" tag="span" to="./login">登录</router-link>
    </header>
</div>
</template>
<script setup>

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
    .header-search
        display: flex;
        width: 74%;
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

</style>