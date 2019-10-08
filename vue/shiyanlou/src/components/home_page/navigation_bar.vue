<template>
<div id="navigation_bar" class="navigation_bar_header">
  <div id="navigation_logo_sign">
    <div id="navigation_logo">
        <a id="navigation_logo_a" href="/">
            <img src="https://static.shiyanlou.com/img/shiyanlou_logo.svg" />
        </a>
        <span id="logo_text">做实验，学编程</span>
    </div>
    <div id="navigation_sign">
      <ul id="sign_menu">
        <li class="navigation_li">
            <a href="#2" id="tab_button">
                企业版
            </a>
        </li>
        <div class="navigation_bar_unlogged_in_div"
          v-if="!login_state">
        <li class="navigation_li">
            <a href="#"
                id="sign_button"
                @click="change_show_state('on')">登录</a>
        </li>
        <li class="navigation_li">
            <a href="#"
                id="register_button"
                @click="change_show_state('up')"
                >
                注册
            </a>
        </li>
      </div>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
    login_state: state =>   state.loginState.sign_on,
    }),
  },
  methods: {
    change_show_state: function(onOrUp) {
      this.$store.dispatch('loginState/change_show_state', onOrUp)
    }
  }
}
</script>
<style>
#navigation_bar {
    display: flex;
    flex-wrap: wrap;
    background: #f7f7f7;
    height: 144px;
    width: 1170px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
    position: relative;
}
#navigation_logo_sign {
    display: flex;
    justify-content:space-between;
    align-content: center;
    width: 1170px;
    height: 84px;
}
#navigation_logo {
    display: inline-flex;
    justify-content: flex-start;
}
#navigation_logo_a {
    display: block;
    border: 0;
    padding: 10px 0;
    margin-top: 8px;
    height: 70px;
}
#logo_text {
    display: block;
    font-size: 18px;
    color: #274A59;
    margin-top: auto;
    margin-bottom: auto;
    text-align: center;
}
.navigation_li {
    float: left;
}
#navigation_sign {
    align-self: center;
}
#tab_button {
    border: 1px solid #08bf31;
    color: #08bf91;
    padding: 6px 22px;
    border-radius: 30px;
    margin: 5px 25px auto auto;
    font-size: 16px;
}
.navigation_bar_unlogged_in_div {
    display: flex;
}
#sign_button {
    font-size: 16px;
    color: #3a3a3a;
    padding: 12px 25px;
}
/* 注册按钮 */
#register_button {
    padding: 12px 25px;
    font-size: 16px;
    color: #ffffff;
    background: #08bf91;
}
</style>