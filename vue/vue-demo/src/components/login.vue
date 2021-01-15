<template>
  <div class="login">
    <div class="container">
      <p class="title">后台管理系统</p>
      <div class="msg mt20">
        <el-input v-model="user" placeholder="请输入用户名"></el-input>
      </div>
      <div class="msg mt20">
        <el-input v-model="password" placeholder="请输入密码"></el-input>
      </div>
      <div class="btn mt20">
        <el-button type="primary" @click="login">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.user && this.password) {
        localStorage.setItem('userName', this.user)
        // 字符串
        // this.$router.push("/main")
        // 对象
        this.$router.push({ path: '/main' })
        // 命名的路由
        // this.$router.push({ name: "main", params: { userId: 1 } })
      }
    }
  }
}
</script>

<style scoped>
.login {
  width: 100%;
}
.container {
  width: 300px;
  padding: 50px;
  border-radius: 4px;
  margin: 0 auto;
  box-shadow: 0 0 20px #cac6c6;
}
.title {
  font-size: 26px;
  font-weight: bold;
  color: #505458;
}
.btn button {
  width: 100%;
}
.mt20 {
  margin-top: 20px;
}
</style>
