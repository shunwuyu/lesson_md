<template>
  <div class="child">
    <h2>子组件</h2>
    <p>The msg from father is:</p>
    <strong class="red">{{sendMsg}}</strong>
    <p class="hr"></p>
    <p>The changeMsg from child is:</p>
    <strong class="blue">{{changeMsg}}</strong>
  </div>
</template>

<script>
export default {
  name: "c1",
  props: ["sendMsg"],
  data() {
    return {};
  },
  computed: {
    changeMsg() {
      return this.sendMsg.toUpperCase();
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
.hr{
  margin: 50px 0;
}
</style>
