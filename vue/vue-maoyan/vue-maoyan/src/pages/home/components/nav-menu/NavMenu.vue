<template>
  <div class="nav-menu scale-1px">
    <router-link to='/city'>
      <div class="left">
        	<span>{{ city }}</span>
          <span class="iconfont icon-xiala"></span>
      </div>
    </router-link>
    <div class="center">
      <span class="menu" :class="[menuActive == menu.id ? 'active' : '']" @click="changeMenu(menu.id)" v-for="menu of menuList" :key="menu.id">
        {{ menu.title }}
      </span>
    </div>
    <div class="right">
      <span class="iconfont icon-sousuo"></span>  
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'NavMenu',
  props: {
    menuActive: {
      type: Number,
      default: 0
    }
  },
  computed: {
    ...mapGetters([
      'city'
    ])
  },
  data() {
    return {
      menuList: [
        {
          id: 0,
          title: '正在热映'
        },
        {
          id: 1,
          title: '即将上映'
        }
      ]
    }
  },
	methods: {
    changeMenu(menuId) {
      this.$emit('changeMenu', menuId);
    }
	}
}
</script>

<style lang="stylus" scoped>
  @import '~stylus/variable.styl'
	.nav-menu
    height: 44px
    display: flex
    background: #fff
    .left
      width: 80px
      float: left
      color: #666
      line-height:44px
      text-align: center
      .icon-xiala
        font-size:14px
    .center
      flex: 1
      text-align: center
      line-height:44px
      padding: 0 20px
      position: relative
      .menu
        display:inline-block
        color: #666
        font-weight: 700
        width: 50%;
        float: left;
        box-sizing: border-box;
        &.active
          color: $bgColor
          &:after
            content: ""
            display: block
            position: absolute
            bottom: -1px
            width: calc(50% - 20px);
            height: 2px
            background-color: $bgColor
    .right
      float: right
      width: 50px
      color: $bgColor
      line-height:44px
      text-align: center
      font-size:16px
      font-weight: bold
</style>
