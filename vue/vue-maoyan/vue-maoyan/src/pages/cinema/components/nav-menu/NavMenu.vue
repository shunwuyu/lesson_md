<template>
  <div class="nav-menu scale-1px">
    <router-link to='/city' class="left">
      <div>
        	<span>北京</span>
          <span class="iconfont icon-xiala"></span>
      </div>
    </router-link>
    <router-link to='/search' class="right">
      <div>
        <span class="iconfont icon-sousuo"></span>  
        <span>搜影院</span>
      </div>
    </router-link>
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
    background: #f5f5f5
    a
      text-decoration: none;
    .left
      flex: 0 0 80px
      float: left
      color: #666
      line-height:44px
      text-align: center
      .icon-xiala
        font-size:14px
    .right
      flex: 1
      color: $bgColor
      display: flex;
      justify-content: center;
      align-items: center;
      height: 28px;
      line-height: 28px
      font-size: 13px;
      color: #b2b2b2;
      margin-left: 18px;
      border: .5px solid #e6e6e6;
      border-radius: 5px;
      margin-right: 15px;
      margin-top: 8px;
      background: #fff;
</style>
