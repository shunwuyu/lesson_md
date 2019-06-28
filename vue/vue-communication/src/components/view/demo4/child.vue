<template>
  <div class="child">
    <h3>子组件</h3>
    <div>子组件要发送的消息：{{msg}}</div>
    <button @click="sendMsg">send message</button>
  </div>
</template>

<script>
export default {
  name: "c4",
  data() {
    return {
      msg: "this is msg of child"
    };
  },
  methods: {
    sendMsg(e) {
      // e.preventDefault();
      this.$emit("message", this.msg);
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
