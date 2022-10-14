<template>
    <div class="login">
        <div class="container">
            <el-form ref="formRef" :rules="rules" :model="form">
                <el-form-item label="用户名" prop="userName">
                    <el-input v-model="form.userName"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="form.password"></el-input>
                </el-form-item>
            </el-form>
            <el-row type="flex" justify="center">
                <el-button type="primary" @click="submit"> 登录</el-button>
            </el-row>
        </div>
    </div>
</template>

<script setup>
    import { reactive, ref } from "vue";
    import { useRouter } from "vue-router";
    import { useStore } from "vuex";
    
            const formRef = ref(null);
            const router = useRouter();
            const store = useStore();
            const form = reactive({
                userName: '',
                password: '',
            });
            const rules = reactive({
                userName: [{ required: true, message: '请填写用户名', trigger: ['blur', 'change'] }],
                password: [{ required: true, message: '请填写密码', trigger: ['blur', 'change'] }]
            });
            const submit = () => {
                formRef.value.validate(async valid => {
                    if (!valid) return;
                    await store.dispatch('EDIT_USER_INFO', form);
                    router.push({
                        path: '/'
                    });
                });
            };
           
       
</script>

<style rel="stylesheet/scss" type="text/scss" lang="scss" scoped>
    .login {
        display: flex;
        justify-content: center;
        align-items: center;
        background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%);
        height: 100vh;
        .container {
            width: 320px;
            height: 285px;
            border: 1px solid #BBBBBB;
            border-radius: 4px;
            background-color: white;
            box-shadow: 10px 10px 5px rgba(0, 0, 0, 0.5);
            padding: 10px;
        }
    }
</style>