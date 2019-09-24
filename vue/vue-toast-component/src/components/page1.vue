<template>
  <div>
    <!-- <toast :visible="visible" msg="现在还没开始呢"></toast> -->
    <button @click="handleToast">观看比赛</button>
    <button @click="handleMyalert">测试 myAlert</button>
  </div>
</template>
<script>
// import Toast from "./Toast/Toast";
import { myAlert } from './Toast/index';
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
    handleMyalert() {
      myAlert('测试消息' + new Date().getTime());
    },
    handleToast() {
      this.$toast('我是弹出消息1');
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