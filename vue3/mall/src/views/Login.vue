<template>
    <div class="login">
        <s-header :name="state.type == 'login' ? '登录' : '注册'" :back="'/home'"></s-header>
        <img class="logo" src="https://s.yezgea02.com/1604045825972/newbee-mall-vue3-app-logo.png" alt="">
        <div v-if="state.type == 'login'" class="login-body login">
            <van-form @submit="onSubmit">
                <van-field
                    v-model="state.username"
                    name="username"
                    label="用户名"
                    placeholder="用户名"
                    :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                v-model="state.password"
                type="password"
                name="password"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <div class="link-register" @click="toggle('register')">立即注册</div>
                    <van-button round block color="#1baeae" native-type="submit">登录</van-button>
                </div>
            </van-form>
        </div>
        <div v-else class="login-body register">
             <van-form @submit="onSubmit">
                <van-field
                v-model="state.username1"
                name="username1"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
                />
                <van-field
                v-model="state.password1"
                type="password"
                name="password1"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
                />
                <div style="margin: 16px;">
                    <div class="link-login" @click="toggle('login')">已有登录账号</div>
                    <van-button round block color="#1baeae" native-type="submit">注册</van-button>
                </div>
            </van-form>
        </div>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import sHeader from '@/components/SimpleHeader.vue'
const state = reactive({
    type: 'login',
    username:'',
    password:'',
    verify: ''
})
const toggle = (v) => {
    state.type = v
    state.verify = ''
}

const onSubmit = async (values) => {
    console.log(values, '////');
    
    // if (state.type == 'login') {

    //     window.location.href = '/'
    // } else {

    // }
}
</script>

<style lang="stylus" scoped>
@import '../common/style/mixin';
.login
    .logo
        wh(3.2rem, 3.2rem)
        display block
        margin 2.13333rem auto .53333rem
    .login-body
        padding 0 .53333rem
    .login
        .link-register
            font-size .37333rem
            margin-bottom .53333rem
            color #1989fa
            display inline-block
    .register
        .link-login
            font-size .37333rem
            margin-bottom .53333rem
            color #1989fa
            display inline-block
    
</style>