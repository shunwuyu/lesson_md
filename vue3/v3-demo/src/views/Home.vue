<template>
    <div class="home">
        <div class="container">
            <span>用户名：{{userInfo.userName}}</span>
            <span>密码：{{userInfo.password}}</span>
            <p>
                <el-button type="warning" size="mini" @click="logout"> 登出</el-button>
            </p>
        </div>
    </div>
</template>

<script>
    import { useStore } from 'vuex';
    import { useRouter } from 'vue-router';
    export default {
        name: 'Home',
        setup() {
            const store = useStore();
            const router = useRouter();
            const { userInfo } = store.getters;
            const logout = async () => {
                await store.dispatch('EDIT_USER_INFO', {});
                router.push({
                    name: 'Login'
                });
            };
            return {
                userInfo,
                logout
            };
        }
    };
</script>

<style lang="scss" scoped>
    .home {
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>