<template>
  <div class="container">
    <child v-bind:send-msg="myMsg"></child>
  </div>
</template>
<script>
import child from "./Child.vue";
export default {
  name: "f1",
  data() {
    return {
      myMsg: "This is father msg！"
    };
  },
  components: {
    child
  }
};
</script>
<style>
</style>
