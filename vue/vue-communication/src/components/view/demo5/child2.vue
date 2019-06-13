<template>
  <div class="child">
    <h3>兄弟组件2（传递状态给兄弟组件1）</h3>
    <div>
      兄弟组件2要发送的消息：
      <span class="blue">{{msg}}</span>
    </div>
    <button @click="sendMsg">send message</button>
  </div>
</template>

<script>
import Bus from "@/assets/bus";
export default {
  name: "c4",
  data() {
    return {
      msg: "this is msg of child2"
    };
  },
  methods: {
    sendMsg(e) {
      e.preventDefault();
      // 触发监听事件
      Bus.$emit("message", this.msg);
    }
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
