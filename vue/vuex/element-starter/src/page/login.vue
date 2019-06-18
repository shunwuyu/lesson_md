<template>
  <div class="login_page">
    <div class="login_page">
	  	<transition name="form-fade" mode="in-out">
	  		<section class="form_contianer" v-show="showLogin">
		  		<div class="manage_tip">
		  			<span class="title">xxx金融后台管理系统</span>
		  		</div>
		    	<el-form :model="loginForm" :rules="rules" ref="loginForm" class="loginForm">
					<el-form-item prop="username">
					    <span class="fa-tips"><i class="fa fa-user"></i></span>
						<el-input class="area" type="text" placeholder="用户名" v-model="loginForm.username" ></el-input>
					</el-form-item>
					<el-form-item prop="password">
					    <span class="fa-tips"><i class="fa fa-lock"></i></span>
						<el-input class="area" type="password" placeholder="密码" v-model="loginForm.password"></el-input>
					</el-form-item>
					<el-form-item>
				    	<el-button type="primary"  @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
				  	</el-form-item>
					<div class="tiparea">
						<p class="wxtip">温馨提示：</p>
						<p class="tip">未登录过的新用户，自动注册</p>
						<p class="tip">注册过的用户可凭账号密码登录</p>
					</div>
				</el-form>
			
	  		</section>
	  	</transition>
  	</div>
  </div>
</template>
<script>
import axios from 'utils/axios'
export default {
  data(){
    return {
				loginForm: {
					username: '',
					password: ''
				},
				rules: {
					username: [
			            { required: true, message: '请输入用户名', trigger: 'blur' },
						{ min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
			        ],
					password: [
						{ required: true, message: '请输入密码', trigger: 'blur' }
					],
				},
				showLogin: false,
				ip:'',
			}
  },
  mounted () {
    this.showLogin = true;
    this.getip(); 
  },
  methods: {
    getip () {
      axios({
        type: 'get',
        path: 'http://httpbin.org/ip',
        data: '',
        fn: data => {
          const ip = data.origin;
          this.ip = ip;
          // console.log(this.ip);
        },
        errFn:res => {
          console.log('-----');
        }
      })
    },
    submitForm () {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
						//用户登录的接口
            let userinfo = this.loginForm;
            let data = {
							ip:this.ip,
							url:'http://ip.taobao.com/service/getIpInfo.php?ip='
            }
            let userData = Object.assign(userinfo, data);
            console.log(userData);
            axios({
              type:'get',
              path:'/api/user/login',
              data:userData,
              fn:data=>{
                if(data.status == 1){
                  this.$message.error('登录成功');
									// this.saveUserInfo() // 存入缓存，用于显示用户名
									// this.generateMenuPushIndex() //模拟动态生成菜单并定位到index
									// this.$store.dispatch('initLeftMenu'); //设置左边菜单始终为展开状态
								}else{
									this.$message.error('登录失败请重试')
								}
              },
              errFn:res => {
								this.$message.error('请求出错11：'+res)
							}
            });

        }
      });
    }
  }
}
</script>
<style lang="less" scoped>
.login_page{
		position: absolute;
		width: 100%;
		height: 100%;
		background: url(../assets/img/bg9.jpg) no-repeat center center;
		background-size: 100% 100%;
	}
	.loginForm{
		 background-color: #fff;
		 padding:20px;
		 border-radius:3px;
		 box-shadow: 5px 5px 10px #01144c;
		.fa-tips{
			position: absolute;
			top: 0px;
			left: 10px;
			z-index: 20;
			color:#FF7C1A;
			font-size: 18px;
		}
		
	}
	.manage_tip{
		margin-bottom:20px;
		.title{
			font-family: cursive;
			font-weight: bold;
			font-size: 26px;
			color:#fff;
		}
		.logo{
			width:60px;
			height:60px;
		}
	}
	.form_contianer{
		width:370px;
		height:210px;
		position: absolute;
		top: 20%;
        left: 34%;
		padding: 25px;
		border-radius: 5px;
		text-align: center;
		.submit_btn{
			width: 100%;
			font-size: 16px;
			letter-spacing:20px;
		}
	}
	.tiparea{
		text-align:left;
		font-size: 12px;
		color: #4cbb15;
		.tip{
			margin-left: 54px;
		}
	}
.form-fade-enter-active, .form-fade-leave-active {
    transition: all 1s;
}
.form-fade-enter, .form-fade-leave-active {
    transform: translate3d(0, -50px, 0);
    opacity: 0;
}
.loginForm{
		.el-button--primary{
			background-color:#FF7C1A;
			border:1px solid #FF7C1A;
		}
	}
</style>