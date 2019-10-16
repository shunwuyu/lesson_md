<template>
  <div>
    <div v-if="viewAccessSuper">财务报表，今天流水 3亿</div>
    <div v-if="viewAccessAll">用户报表，今天新增 4亿用户</div>
  </div>
</template>
<script>
import { hasOneOf } from '@/libs/tools'
export default {
  computed: {
    access () {
      return this.$store.state.user.access
    },
    viewAccessAll () {
      return hasOneOf(['super_admin', 'admin'], this.access)
    },
    viewAccessSuper () {
      return hasOneOf(['super_admin'], this.access)
    }
  }
}
</script>
<style scoped>
</style>
