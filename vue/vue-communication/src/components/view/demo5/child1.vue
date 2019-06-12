<template>
  <div class="child">
    <h3>兄弟组件1(监听兄弟组件2)</h3>
    <div>
      接收到的消息为：
      <span class="red">{{msg}}</span>
    </div>
  </div>
</template>

<script>
import Bus from "@/assets/bus";
export default {
  name: "c4",
  data() {
    return {
      msg: ""
    };
  },
  mounted() {
    // 在公共对象上，注册监听事件
    Bus.$on("message", msg => (this.msg = msg));
  }
};
</script>

<style>
.red {
  color: rgba(255, 0, 0, 0.678);
}
.blue {
  color: rgba(0, 0, 255, 0.781);
}
.child {
  border: 1px solid #71b92e;
}
</style>
