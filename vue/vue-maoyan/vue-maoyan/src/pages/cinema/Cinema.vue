<template>
  <div>
  	<common-header :title="title" :back="true" @goBack="goBack"></common-header>
    <common-footer :bottom-active="bottomActive"></common-footer>
    <nav-menu></nav-menu>
    <div class="content">
      <scroll :data="cinemaList" class="wrap_content">
        <div>
          <div class="cinema" v-for="(cinema,index) of cinemaList" :key="index">
            <div class="title">
              <span>{{ cinema.nm }}</span>
              <span class="price-block">
                <span class="price">{{ cinema.sellPrice }}</span><span class="q">元起</span>
              </span>
            </div>
            <div class="location">
              <span class="address">{{ cinema.addr }}</span>
              <span class="distance">{{ cinema.distance }}</span>
            </div>
            <div class="label-block">
              <span class="label endorse">改签</span>
              <span class="label snack">小吃</span>
            </div>
            <div v-if="cinema.promotion" class="discount-block">
              <span class="discount-label-icon">卡</span>
              <span class="discount-label-text">开卡特惠，首单2张立减3元</span>
            </div>
          </div>
        </div>
      </scroll>
    </div>
    <loading class="loading" v-if="isLoading"></loading>
  </div>
</template>

<script>
import CommonHeader from '../../components/header/Header'
import CommonFooter from '../../components/footer/Footer'
import NavMenu from './components/nav-menu/NavMenu'
import Loading from '../../components/loading/Loading'
import { getCinemaList } from '@/api/cinema.js'
import Scroll from '@/components/scroll/Scroll'
export default {
  name: 'Cinema',
  components: {
    CommonHeader,
    CommonFooter,
    NavMenu,
    Loading,
    Scroll
  },
  data () {
    return {
      title: '影院',
      bottomActive: 1,
      cinemaList: [],
      isLoading: true
    }
  },
  mounted() {
    getCinemaList().then((res) => {
      if (res.code) {
        this.cinemaList = res.cinemas
        this.isLoading = false
        console.log(this.cinemaList);
      }
    })
  },
  methods: {
    goBack() {
      this.$router.back()
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import '~stylus/variable.styl'
  .loading
    margin-top:12px;
  .content
    position: fixed
    width: 100%
    top: 96px
    bottom: 56px
    .wrap_content
      overflow: hidden
      height: 100%
      .cinema
        padding: 13px 15px 13px 0;
        margin-left: 15px;
        background-color: #fff;
        position: relative;
        overflow: hidden;
        .title
          height: 23px;
          line-height: 23px;
          font-size: 16px;
          color: #000;
          .price-block
            padding-top: 9px;
            padding-left: 3px;
            color: $bgColor
            .price
              font-size: 18px;
            .q
              margin-left: 3px;
        .location
          margin-top: 6px;
          font-size: 13px;
          color: #666;
          .distance
            margin-left: 5px;
        .label-block
          height: 17px;
          line-height: 17px;
          margin-top: 6px;
          margin-bottom: 4px;
          overflow: hidden;
          font-size: 0;
          flex-shrink: 0;
          .label
            position: relative;
            display: inline-block;
            padding: 0 3px;
            height: 15px;
            line-height: 15px;
            border-radius: 2px;
            font-size: 12px;
            margin-right:6px;
            &.endorse
              color: #589daf;
              border: 1px solid #589daf;
            &.snack
              color: #f90;
              border: 1px solid #f90;
        .discount-block
          color: #999;
          margin-bottom: 4px;
          .discount-label-icon
            padding: 0 2px;
            height: 14px;
            line-height: 14px;
            border-radius: 2px;
            font-size: 12px;
            margin-right:6px;
            display: inline-block;
            color: $bgColor;
            border: 1px solid $bgColor;
          .discount-label-text
            margin-left: 0;
            font-size: 11px;
</style>