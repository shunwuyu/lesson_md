<!-- 详情页banner组件 -->
<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="banner-slide">
      <div class="banner-info">
        <div class="banner-number">
          <span class="iconfont photo-icon">&#xe872;&nbsp;</span><span class="photo-number">{{gallaryImgs.length}}</span>
        </div>
        <div class="banner-title">
          {{sightName}}
          <span class="iconfont arrow-icon">&#xe62d;</span>
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary
        :gallaryImgs="gallaryImgs"
        v-show="showGallary"
        @close="handleGallaryClose"
      ></common-gallary>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/fade/FadeAnimation'

export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallary: false
    }
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary,
    FadeAnimation
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";
@import "~styles/mixins.scss";

.banner {
  position: relative;
  overflow: hidden;
  height: 0;
  padding-bottom: 55%;
  .banner-img {
    width: 100%;
  }
  .banner-info {
    display: flex;
    flex-direction: column;
    position: absolute;
    padding-bottom: .06rem;
    bottom: 0;
    left: 0;
    right: 0;
    line-height: .5rem;
    color: #fff;
    font-weight: 500;
    background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8));
    .banner-title {
      flex: 1;
      font-size: .3rem;
      padding: 0 .2rem;
      @include ellipsis;
      .arrow-icon {
        float: right;
      }
    }
    .banner-number {
      width: .4rem;
      height: .34rem;
      line-height: .34rem;
      padding: 0 .4rem;
      margin: 0 0 .06rem .2rem;
      line-height: .34rem;
      font-size: .24rem;
      border-radius: .2rem;
      background: rgba(0, 0, 0, .6);
      display: flex;
      justify-content: center;
      .photo-icon {
        // display: inline-block;
        line-height: .34rem;
      }
      .photo-number {
        font-size: .24rem;
        margin-top: .02rem;
      }
    }
  }
}
</style>
