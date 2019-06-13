<template>
  <div class="container">
    <h2>父组件</h2>
    <p>
      从子组件获取的消息为：
      <span class="red">{{msg}}</span>
    </p>
    <child v-on:message="getMsg"></child>
  </div>
</template>
<script>
import child from "./Child.vue";
export default {
  name: "f4",
  data() {
    return {
      msg: ""
    };
  },
  components: {
    child
  },
  methods: {
    getMsg(msg) {
      this.msg = msg;
    }
  }
};
</script>
<style>
.red {
  color: rgb(128, 68, 189);
}
</style>
