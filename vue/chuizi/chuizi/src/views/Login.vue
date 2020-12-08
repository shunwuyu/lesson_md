<template>
  <div class="login v2">
    <div v-if="loginPage">
      <div class="input">
        <input type="text" v-model="ruleForm.userName" placeholder="账号">
      </div>
      <div class="input">
        <input type="password" v-model="ruleForm.userPwd" @keyup.enter="login" placeholder="密码">
      </div>
      <div>
         <span class="pa" style="top: 0;left: 0;color: #d44d44">{{ruleForm.errMsg}}</span>
          <a href="javascript:;" style="padding: 0 5px" @click="loginPage = false">注册 Smartisan ID</a>
      </div>
      <div>
        <button @click="doLogin">登录</button>
      </div>
    </div>
    <div v-else>
      <div class="input">
        <input type="text"
          v-model="registered.userName" placeholder="账号">
      </div>
      <div class="input">
        <input type="password"
                v-model="registered.userPwd"
                placeholder="密码">
      </div>
      <div class="input">
        <input type="password" v-model="registered.userPwd2" placeholder="重复密码">
      </div>
      <div>
        <button @click="doRegister">登录</button>
      </div>
      <ul class="common-form pr">
        <li class="pa" style="left: 0;top: 0;margin: 0;color: #d44d44">{{registered.errMsg}}</li>
      </ul>
    </div>
    
  </div>
</template>
<script>
import { register, userLogin } from '../api/index'
export default {
  data() {
    return {
      loginPage: true,
      ruleForm: {
        userName: '',
        userPwd: '',
        errMsg: ''
      },
      registered: {
        userName: '',
        userPwd: '',
        userPwd2: '',
        errMsg: ''
      }
    }
  },
  methods: {
    doRegister() {
      const {userName, userPwd, userPwd2} = this.registered
      if (!userName || !userPwd || !userPwd2) {
        this.registered.errMsg = '账号密码不能为空'
        return false
      }
      if (userPwd2 !== userPwd) {
        this.registered.errMsg = '两次输入的密码不相同'
        return false
      }
      register({userName, userPwd}).then(res => {
        console.log(res);
        this.registered.errMsg = res.msg
        if (res.data.status === '0') {
            loginPage = true
        }
      })
    },
    doLogin() {
      const {userName, userPwd} = this.ruleForm
      if (!userName || !userPwd) {
        this.ruleForm.errMsg = '账号或者密码不能为空!'
      } else {
        let params = {userName, userPwd}
        console.log(params, '++++++')
        userLogin(params).then(res => {
          console.log(res);
          if (res.data.status === '0') {
            this.$router.go(-1)
          } else {
            this.ruleForm.errMsg = res.msg
          }
        })
      }
    }
  }
}
</script>
