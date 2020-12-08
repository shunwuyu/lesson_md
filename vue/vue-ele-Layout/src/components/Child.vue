<template>
  <div>
    <sub-child />
  </div>
</template>
<script>
import SubChild from './SubChild';
export default {
  components: {
    SubChild
  },
  mounted() {
    this.$emit('elChildMounted', {code: 1})
  }
}
</script>
<style scoped>

</style>