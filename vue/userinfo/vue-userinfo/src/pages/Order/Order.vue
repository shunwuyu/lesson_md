<template>
<div>
  <!-- Order2 -->
  {{userInfo}}
</div>
</template>
<script>
// import {mapGetters}  from 'vuex'
export default {
  computed: {
    userInfo() {
      return this.$store.userInfo
    }
  },
  mounted() {
    if (!this.userInfo) {
      this.$router.push(`/login?url=/order`)
    }
    // this.$router.push('/')
    // this.$router.replace('/')
  }
}
</script>