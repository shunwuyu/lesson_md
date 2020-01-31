<template>
  <div class="container">
      <h2>父组件</h2>
      <child1></child1>
      <child2></child2>
  </div>
</template>
<script>
import child1 from "./child1.vue";
import child2 from "./child2.vue";
export default {
  name: "f5",
  data() {
    return {};
  },
  components: {
    child1,
    child2
  }
};
</script>
<style>
.red {
  color: rgb(128, 68, 189);
}
</style>
