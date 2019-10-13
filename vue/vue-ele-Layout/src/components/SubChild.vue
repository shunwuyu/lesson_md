<template>
  <div>
    sub-child
    <button :style="{color: theme}">theme</button>
  </div>
</template>
<script>
export default {
  inject: ['theme'],
  created () {
    console.log(this.theme) // => "bar"
  }
}
</script>
<style scoped>

</style>