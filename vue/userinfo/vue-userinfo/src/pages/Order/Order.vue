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
      return this.$store.state.userInfo
    }
  },
  mounted() {
    // console.log(this.$store.state)
    if (!this.userInfo) {
      this.$router.push(`/login?url=/order`)
    }
    // this.$router.push('/')
    // this.$router.replace('/')
  }
}
</script>