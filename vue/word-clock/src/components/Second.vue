<template>
  <ul :style="{ transform: `rotate(${rotates * -6}deg)` }">
    <li
      v-for="(item, index) in secondList"
      :key="index"
      :class="{ hover: index == rotates - 1 }"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "second",
  props: ["second"],
  data() {
    return {
      rotates: ""
    };
  },
  computed: {
    secondList: {
      get() {
        return this.$t("second");
      }
    }
  },
  watch: {
    second(val) {
      this.rotates = val;
    }
  }
}
</script>
<style lang="stylus" scoped>
ul
  z-index 9
  for n in 1..60
    li:nth-child({n})
      transform rotate(n * 6deg) translateX(390px)

</style>