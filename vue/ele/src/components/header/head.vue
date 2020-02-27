<template>
  <header id='head_top'>
    <slot name='logo'></slot>
    <section class="head_goback" v-if="goBack" @click="$router.go(-1)">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <polyline points="12,18 4,9 12,0" style="fill:none;stroke:rgb(255,255,255);stroke-width:2"/>
      </svg>
    </section>
    <router-link :to="userInfo? '/profile':'/login'"  v-if='signinUp' class="head_login">
      <svg class="user_avatar" v-if="userInfo">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#user"></use>
      </svg>
      <span class="login_span" v-else>登录|注册</span>
    </router-link>
    <section class="title_head ellipsis" v-if="headTitle">
      <span class="title_text">{{headTitle}}</span>
    </section>
    <slot name="edit"></slot>
  </header>
</template>
<script>
export default {
  props: ['headTitle', 'signinUp', 'goBack'],
  data() {
    return {
      userInfo: null
    }
  }
}
</script>
<style lang="styl" scoped>
@import "../../style/mixin.styl";

#head_top
  background-color $blue
  position fixed
  z-index 100
  left 0
  top 0
  wh(100%, 1.95rem)
.title_head
  center()
  width 50%
  color #fff
  text-align center
  .title_text
    sc(0.8rem, #fff)
    text-align center
    font-weight bold

.head_login
  right 0.55rem
  sc(0.65rem, #fff)
  ct()
  .login_span
    color #fff
  .user_avatar
    fill: #fff
    wh(.8rem, .8rem)
.head_goback
  left 0.4rem
  wh(0.6rem, 1rem)
  line-height 2.2rem
  margin-left .4rem
</style>
