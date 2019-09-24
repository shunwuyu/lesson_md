<template>
  <div class="toast" v-show="visible">
    <p class="toast-msg">{{ msg }}</p>
  </div>
</template>
<script>
export default {
  name: "Toast",
  props: {
    visible: {
      type: Boolean,
      required: true
    },
    msg: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  background: rgba(0, 0, 0, 0.35);
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  color: #fff;
}
.toast-msg {
  text-align: center;
}
</style>