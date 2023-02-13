<template>
    <div class="header">
        <div class="left">
            <el-icon class="back" v-if="state.hasBack" @click="back"><Back /></el-icon>
            <span style="font-size: 20px">{{ state.name }}</span>
        </div>
        <div class="right">
            <el-popover
                placement="bottom"
                :width="320"
                trigger="click"
                popper-class="popper-user-box"
            >
                <template #reference>
                <div class="author">
                    <el-icon><User /></el-icon>
                    {{ state.userInfo && state.userInfo.nickName || '' }}
                    <el-icon><CaretBottom /></el-icon>
                    <i class="el-icon-caret-bottom" />
                </div>
                </template>
                <div class="nickname">
                <p>登录名：{{ state.userInfo && state.userInfo.loginUserName || '' }}</p>
                <p>昵称：{{ state.userInfo && state.userInfo.nickName || '' }}</p>
                <el-tag size="small" effect="dark" class="logout" @click="doLogout">退出</el-tag>
                </div>
            </el-popover>
        </div>
    </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { getUserProfile, logout } from '@/service/user.js'
import { localRemove, pathMap } from '@/utils/index.js'

onMounted(() => {
    const pathname = window.location.hash.split('/')[1] || ''
    console.log(pathname);
    if (!['login'].includes(pathname)) {
        getUserInfo()
    }
})

const getUserInfo = async () => {
    const userInfo = await getUserProfile()
    // console.log(userInfo, '~~~~~')
    state.userInfo = userInfo.data
}

const router = useRouter()
const state = reactive({
    hasBack: false,
    name: 'dashboard',
    userInfo: null
})

const back = () => {
  router.back()
}

const doLogout = async () => {
    await logout();
    localRemove('token')
    router.push({ path: '/login' })
}

router.afterEach((to) => {
    state.name = pathMap[to.name]
    state.hasBack = ['level2', 'level3'].includes(to.name)
})

</script>

<style lang="stylus" scoped>
.header {
    height: 50px;
    border-bottom: 1px solid #e9e9e9;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
  }
  .header .left .back {
    border: 1px solid #e9e9e9;
    padding: 5px;
    border-radius: 50%;
    margin-right: 5px;
    cursor: pointer;
  }
  .right > div > .icon{
    font-size: 18px;
    margin-right: 6px;
  }
  .author {
    margin-left: 10px;
    cursor: pointer;
  }
.popper-user-box {
    background: url('https://s.yezgea02.com/lingling-h5/static/account-banner-bg.png') 50% 50% no-repeat!important;
    background-size: cover!important;
    border-radius: 0!important;
  }
   .popper-user-box .nickname {
    position: relative;
  }
  .popper-user-box .nickname .logout {
    position: absolute;
    right: 0;
    top: 0;
    cursor: pointer;
  }
</style>