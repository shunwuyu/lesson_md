<template>
  <div>
    <!-- <toast :visible="visible" msg="现在还没开始呢"></toast> -->
    <button @click="handleToast">观看比赛</button>
  </div>
</template>
<script>
// import Toast from "./Toast/Toast";
export default {
  // data() {
  //   return {
  //     visible: false,
  //   }
  // },
  // components: {
  //   Toast
  // },
  methods: {
    handleToast() {
      this.$toast('我是弹出消息2');
      // this.visible = true;
      // setTimeout(() => {
      //   this.visible = false;
      // }, 2000)
    }
  }
}
</script>
<style scoped>

</style>