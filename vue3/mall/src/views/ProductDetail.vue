<template>
    <div class="product-detail">
        <s-header :name="'商品详情'"></s-header>
        <div class="detail-content">
            <div class="detail-swipe-wrap">
                <van-swipe class="my-swipe" indicator-color="#1baeae">
                    <van-swipe-item v-for="(item, index) in state.detail.goodsCarouselList" :key="index">
                        <img :src="item" alt="">
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="product-info">
                <div class="product-title">
                {{ state.detail.goodsName || '' }}
                </div>
                <div class="product-desc">免邮费 顺丰快递</div>
                <div class="product-price">
                <span>¥{{ state.detail.sellingPrice || '' }}</span>
                <!-- <span>库存203</span> -->
                </div>
            </div>
            <div class="product-intro">
                <ul>
                    <li>概述</li>
                    <li>参数</li>
                    <li>安装服务</li>
                    <li>常见问题</li>
                </ul>
                <div class="product-content" v-html="state.detail.goodsDetailContent || ''"></div>
            </div>
        </div>
        <van-action-bar>
            <van-action-bar-icon icon="chat-o" text="客服" />
            <van-action-bar-icon icon="cart-o" :badge="cart.count" @click="goTo()" text="购物车" />
            <van-action-bar-button type="warning" @click="handleAddCart" text="加入购物车" />
            <van-action-bar-button type="danger" @click="goToCart" text="立即购买" />
        </van-action-bar>
    </div>
</template>
<script setup>
import sHeader from '@/components/SimpleHeader.vue'
import { reactive, onMounted, nextTick } from 'vue'
import { getDetail } from '@/service/goods'
import { useRouter, useRoute } from 'vue-router'
import { prefix } from '@/common/js/utils'
import { useCartStore } from '@/store/cart'

const cart = useCartStore()

const router = useRouter()
const route = useRoute()

const state = reactive({
  detail: {
    goodsCarouselList: []
  }
})

const goTo = () => {

}

const  handleAddCart = () => {

}

const goToCart = () => {

}

onMounted(async () => {
    const { id } = route.params
    const { data } = await getDetail(id)
    
    data.goodsCarouselList = data.goodsCarouselList.map(i => prefix(i))
    state.detail = data
    // console.log(state.detail, '//////')
})
</script>
<style lang="stylus">
@import '../common/style/mixin.styl';
.product-detail
    .detail-header
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10000;
        fj()
        wh(100%, 1.17333rem);
        line-height: 1.17333rem;
        padding: 0 .266667rem;
        color: #252525;
        background: #fff;
        border-bottom: 1px solid #dcdcdc;
        .product-name
            font-size: .37333rem
    .detail-content
        height calc(100vh - 1.33333rem)  
        overflow: hidden;
        overflow-y: auto;    
        .detail-swipe-wrap
            .my-swipe .van-swipe-item
                img
                    width 100%
        .product-info
            padding: 0 .266667rem;
            .product-title
                font-size: .48rem;
                text-align left
                color #333
            .product-desc
                font-size .37333rem
                text-align left
                color #999
                padding .13333rem 0
            .product-price
                fj()
                span:nth-child(1)
                    color: #F63515;
                    font-size: .586667rem
                span:nth-child(2)
                    color: #999;
                    font-size .426667rem
        .product-intro
            width: 100%;
            padding-bottom 1.3333rem
            ul
                fj()
                width: 100%;
                margin:  .266667rem 0
                li
                    flex 1
                    padding .13333rem 0
                    text-align center
                    font-size .4rem
                    border-right: 1px solid #999
                    &:last-child
                        border-right none
            .product-content
                padding: 0 .26667rem;
                img
                    width 100%
                
.van-action-bar-button--warning { 
    background: linear-gradient(to right,#6bd8d8, @primary)
}
.van-action-bar-button--danger {
    background: linear-gradient(to right, #0dc3c3, #098888)
} 

</style>