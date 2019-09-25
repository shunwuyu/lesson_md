<template>
  <div class="start_wrap">
    <div class="text">
      娱乐看猫眼
    </div>
    <div class="bottom">
      <div class="icon"></div>
      <p class="title">{{ title }}</p>
      <p class="copyright">@maoyan.com 美团云提供技术服务</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Start',
  data () {
    return {
      title: '猫眼电影'
    }
  },
  mounted() {
    setTimeout(() => {
      this.$router.push('/home')
    }, 2500)
  }
}
</script>
<style lang="stylus" scoped>
  @import '~stylus/variable.styl'
  @import '~stylus/mixins.styl'
  .start_wrap
    color: $bgColor
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display:flex
    align-items: center
    flex-direction: column
    justify-content: center
    margin-top: -128px
    .text
      width:70px;
      font-size:36px
      line-height:50px
      text-align: center;
    .bottom
      position: absolute
      bottom: 10px
      line-height:20px
      .icon
        bg-image('logo')
        width: 50px
        height: 50px
        background-size: 50px 50px
        margin:10px auto
      .title
        font-weight:bold
        font-size:24px
        margin-bottom:6px
        text-align: center
      .copyright
        color:#666
        font-size:12px
</style>