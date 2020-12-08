<template>
  <div>
    <header-bar />
    <div v-debounce="helloFn">点击</div>
      <router-view>

      </router-view>
    <footer-bar />
  </div>
</template>
<script>

export default {
  methods: {
    helloFn() {
      console.log(123);
    }
  }
}
</script>
<style scoped>

</style>