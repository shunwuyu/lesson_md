<template>
  <div id="app">
    <!--home-->
    <!-- <head-top signin-up='home'>
      <span slot='logo' class="head_logo"  @click="reload">ele.me</span>
    </head-top> -->
    <!-- <head-top headTitle="华东理工大学">
      
      <span slot='logo' class="head_logo"  @click="reload">ele.me</span>
    </head-top> -->
    <!-- <head-top head-title="编辑地址" go-back='true'>
      <span slot="edit" class="edit" @click="editThing">{{editText}}</span>
    </head-top> -->

    <!-- <div style="width:16rem;height:2rem;background-color:green;"></div> -->

    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <!-- <alert-tip v-if="showAlert" @closeTip="showAlert = false" alertText="IOS用户请前往AppStore下载"/> -->
  </div>
</template>
<script>
// import Header from './components/header/head.vue';

import AlertTip from '@/components/common/alertTip.vue';

// console.log(Header);
export default {
  data () {
    return {
      editText: '编辑',
      showAlert: true
    }
  },
  components: {
    // 'head-top': Header
    'alert-tip': AlertTip
  },
  methods: {
    reload () {
      window.location.reload();
    },
    editThing () {
      if(this.editText == '编辑'){
        this.editText='完成';
        this.deletesite=true;
      }else{
        this.editText='编辑';
        this.deletesite=false;
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "./style/mixin.styl";
* {
  margin: 0;
  padding: 0;
}
.head_logo
  left .4rem
  font-weight 400
  sc(0.7rem, #fff)
  wh(2.3rem, 0.7rem)
  ct()
.edit
  right 0.4rem
  sc(0.7rem, #fff)
  ct()
    
</style>
