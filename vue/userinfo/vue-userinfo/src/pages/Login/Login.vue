<template>
  <div>
    <!-- Login -->
    <form class="loginForm">
      <section class="input_container">
        <!-- input => change事件 -->
        <input type="text" placeholder="账号" v-model.lazy="userAccount">
      </section>
      <section class="input_container">
        <input  type="password" placeholder="密码"  v-model.lazy="password">
      </section>
      <div class="login_container" @click="mobileLogin">登录</div>
    </form>
  </div>
</template>
<script>
// import { mapActions }  from 'vuex'
// import { accountLogin } from '@/api/getData';
export default {
  data() {
    return {
      userInfo: '',
      userAccount: '',
      showPassword: false,
      password: ''
    }
  },
  // watch: {
  //   userAccount(newVal, oldVal) {
  //     console.log(newVal, oldVal);
  //   }
  // },
  methods: {
    // ...mapActions(['accountLogin']),
    changePassWordType() {
      this.showPassword = !this.showPassword;
    },
    mobileLogin () {
      if (!this.userAccount) {
        alert('请输入用户名');
        return
      }
      if (!this.password) {
        alert('请输入密码');
        return
      }
      // console.log(this.userAccount, this.password)
      this.$store.dispatch('accountLogin', {
        account: this.userAccount, 
        password: this.password
      })
      // accountLogin(this.userAccount, this.passWord);

    },
    
  },
  computed: {
   
  },
}
</script>
<style lang="stylus">

</style>