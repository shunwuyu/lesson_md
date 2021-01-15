<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
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
    <!-- 我们将某个列表类组件内容滑动到第100条位置，那么我们在切换到一个组件后再次切换回到该组件，该组件的位置状态依旧会保持在第100条列表处 -->
    <keep-alive>
      <router-view :seller="seller"></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import { urlParse } from "./common/js/util";
import header from "@/components/header/header.vue";
export default {
  name: "App",
  data() {
    return {
      seller: {
        // id: (() => {
        //   let queryParam = urlParse();
        //   return queryParam.id;
        // })()
      }
    };
  },
  components: {
    "v-header": header
  },
  created() {
    this.$http
      .get(
        "https://www.easy-mock.com/mock/5ca2c29464930718b239eb94/lm/vue-eleme-seller"
      )
      .then(response => {
        console.log(response);
        if (response.data.errno === 0) {
          this.seller = Object.assign({}, this.seller, response.data.data);
          console.log(this.seller);
        }
      });
  }
};
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './common/stylus/mixin.styl';
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  // border-bottom: 1px solid rgba(7, 17, 27, 0.1)
  border-1px(rgba(7, 17, 27, 0.1));

  .tab-item {
    flex: 1;
    text-align: center;

    & > a {
      display: block;
      font-size: 14px;
      color: rgb(77, 85, 93);

      &.active {
        color: rgb(240, 20, 20);
      }
    }
  }
}
</style>
