<!-- 首页banner轮播组件 -->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="list.length">
      <swiper-slide v-for = "item of list" :key = "item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: 3000,
        autoplayDisableOnInteraction: false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// .wrapper /deep/ .swiper-pagination-bullet-active {
//   background: #fff;
// }
.wrapper /deep/ .swiper-pagination-bullet-active {
  background: #fff;
}
.swiper-pagination-bullet-active {
  background: #fff;
}
.wrapper {
  overflow: hidden;
  width: 100%;
  height: 0;
  padding-bottom: 31.25%;
  background: #eee;
  .swiper-img{
    width: 100%;
  }
}
</style>
