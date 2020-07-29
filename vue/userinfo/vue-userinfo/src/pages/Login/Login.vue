<template>
  <div>
    <!-- Login -->
    <form class="loginForm">
      <section class="input_container">
        <!-- input => change事件 -->
        <input type="text" placeholder="账号" v-model.lazy="username">
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
      username: '',
      showPassword: false,
      password: ''
    }
  },
  watch: {
    username(newVal, oldVal) {
      console.log(newVal, oldVal);
    },
    userInfo(newVal, oldVal) {
      if (newVal) {
        // this.$router.push({path: '/'})
        let url = this.$route.query.url;
        // console.log(url);
        // console.log(this.$store.state.userInfo)
        this.$router.push({
          path: url
        });
      }
    }
  },
  methods: {
    // ...mapActions(['accountLogin']),
    changePassWordType() {
      this.showPassword = !this.showPassword;
    },
    mobileLogin () {
      if (!this.username) {
        alert('请输入用户名');
        return
      }
      if (!this.password) {
        alert('请输入密码');
        return
      }
      // console.log(this.userAccount, this.password)
      this.$store.dispatch('accountLogin', {
        username: this.username, 
        password: this.password
      })
      //accountLogin(this.userAccount, this.passWord);
    },
    
  },
  computed: {
   userInfo() {
     return this.$store.state.userInfo
   }
  },
  mounted() {
    // if (this.userInfo) {
    //   this.$router.push({path: '/'})
    // }
  }
}
</script>
<style lang="stylus">

</style>