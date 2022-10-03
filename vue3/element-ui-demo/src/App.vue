<template>
  <div>
    <ElButton type="primary" @click="doLogin">按钮</ElButton>
    <ElButton type="success" size="small">按钮</ElButton>
    <ElButton type="success" :disabled="true">按钮</ElButton>
    <ElButton type="success" :loading="true">按钮</ElButton>
    <ElButton  :plain="true">按钮</ElButton>
    <ElButton type="primary" round>按钮</ElButton>
    <ElButton type="primary" circle>按钮</ElButton>
    <el-button type="danger" icon="el-icon-delete" circle></el-button>
    <hr>
    <ElButtonGroup>
      <ElButton type="primary" icon="el-icon-arrow-left">上一页</ElButton>
      <ElButton type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></ElButton>
    </ElButtonGroup>
    <ElBadge :value="12" class="item">
      <ElButton size="small">评论</ElButton>
    </ElBadge>
    <ElBadge :value="120" :max="99" class="item">
      <ElButton size="small">评论</ElButton>
    </ElBadge>
    <el-badge is-dot class="item">数据查询</el-badge>
    <div>
      <el-avatar icon="el-icon-user-solid"></el-avatar>
    </div>
    <div>
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
    <div>
      <el-avatar> user </el-avatar>
    </div>
  </div>
</template>
<script>
import ElBadge from './components/ElBadge.vue'
import ElButton from './components/ElButton.vue'
import ElButtonGroup from './components/ElButtonGroup.vue'
import ElAvatar from './components/ElAvatar.vue'

export default {
  components: {
    'el-avatar': ElAvatar,
    ElBadge,
    ElButton,
    ElButtonGroup
  },
  methods: {
    doLogin() {
      console.log('//////')
    }
  }
}
</script>