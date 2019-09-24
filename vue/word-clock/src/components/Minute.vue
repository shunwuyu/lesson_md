<template>
  <ul :style="{ transform: `rotate(${rotates * -6}deg)` }">
    <li
      v-for="(item, index) in minuteList"
      :key="index"
      :class="{ hover: index == rotates - 1 }"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "minute",
  props: ["minute"],
  data() {
    return {
      rotates: ""
    };
  },
  computed: {
    minuteList: {
      get() {
        return this.$t("minute");
      }
    }
  },
  watch: {
    minute(val) {
      this.rotates = val;
    }
  }
};
</script>

<style scoped lang="stylus">
ul
  z-index 8
  for n in 1..60
    li:nth-child({n})
      transform: rotate(n * 6deg) translateX(320px)
</style>