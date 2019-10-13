<template>
  <div class="button">
    <!-- 一个不带 name 的 <slot> 出口会带有隐含的名字“default”。 -->
    <slot name="header"></slot>
    <slot name="footer"></slot>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
.button {
  border: 1px solid #000;
  border-radius: 4px;
}
</style>