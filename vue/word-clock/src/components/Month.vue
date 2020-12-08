<template>
  <ul :style="{ transform: `rotate(${rotates * -30}deg)` }">
    <li
      v-for="(item, index) in monthList"
      :key="index"
      :class="{ hover: index == rotates - 1 }"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "month",
  props: ["month"],
  data() {
    return {
      rotates: ""
    };
  },
  computed: {
    monthList: {
      get() {
        return this.$t('month');
      }
    }
  },
  watch: {
    month(val) {
      this.rotates = val;
    }
  }
};
</script>

<style scoped lang="stylus">
ul
  z-index 3
  for n in 1..12
    li:nth-child({n})
      transform rotate(n*30deg) translate(60px)
</style>