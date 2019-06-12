<template>
  <div class="sidebar">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#eeeeee"
      router>
      <el-menu-item index="/main">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>用户管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/main/user-list">用户列表</el-menu-item>
          <el-menu-item index="/main/user-manage">用户信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        // {
        //     icon: 'el-icon-setting',
        //     index: '/home',
        //     title: '首页'
        // },
        // {
        //     icon: 'el-icon-menu',
        //     index: '2',
        //     title: '用户管理',
        //     subs: [
        //         {
        //             index: '/users',
        //             title: '用户列表'
        //         }
        //     ]
        // }
      ]
    }
  },
  computed: {
    onRoutes () {
      console.log(this.$route.path)
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.sidebar {
  display: block;
  position: absolute;
  width: 200px;
  left: 0;
  top: 70px;
  bottom: 0;
  background: #2e363f;
}
.sidebar > ul {
  height: 100%;
}
</style>
