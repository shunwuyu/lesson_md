<template>
  <div>
    <router-link tag="div" to="/" class="header-top" v-show="showHeaderTop">
      <div class="iconfont back-icon">&#xe61f;</div>
    </router-link>
    <div class="header-fixed" v-show="!showHeaderTop" :style="opacityStyle">
      <router-link to="/">
        <div class="header-fixed-left">
          <span class="iconfont back-icon">&#xe61f;</span>
        </div>
      </router-link>
      <div class="header-fixed-title">{{sightName}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showHeaderTop: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  props: {
    sightName: String
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showHeaderTop = false
      } else {
        this.showHeaderTop = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import "~styles/variable.scss";

.header-top {
  position: absolute;
  left: .2rem;
  top: .2rem;
  width: .8rem;
  height: .8rem;
  border-radius: .4rem;
  background: rgba(0, 0, 0, .6);
  color: #fff;
  line-height: .8rem;
  text-align: center;
}
.header-fixed {
  z-index: 2;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  overflow: hidden;
  height: .88rem;
  line-height: .88rem;
  background: $bgColor;
  color: #fff;
  text-align: center;
  font-size: .3rem;
  .header-fixed-left {
    float: left;
    width: .8rem;
    color: #fff;
  }
  .header-fixed-title {
    margin: 0 1rem;
  }
}
</style>
