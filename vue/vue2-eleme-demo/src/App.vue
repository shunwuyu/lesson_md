<template>
    <div>
        <v-header :seller="seller"></v-header>
        <!-- <v-header ></v-header> -->
        <div class="tab border-1px">
            <div class="tab-item">
                <router-link to="/goods">商品</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/ratings">评论</router-link>
            </div>
            <div class="tab-item">
                <router-link to="/seller">商家</router-link>
            </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import response from './mock/data/seller.json';
import header from './components/header/header.vue';
export default {
    data() {
        return {
            seller: {}
        }
    },
    created () {
        setTimeout(() => {
            // console.log(response.data)
            this.seller = response.data
        }, 1000)
    },
    components: {
      'v-header': header
    }
}
</script>

<style scoped>
@import './common/stylus/mixin.styl'; 
.tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>