<template>
  <ul :style="{ transform: `rotate(${rotates * -11.613}deg)` }">
    <li
      v-for="(item, index) in dayList"
      :key="index"
      :class="{ hover: index == rotates - 1 }"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "day",
  props: ["day"],
  data() {
    return {
      rotates: ""
    };
  },
  computed: {
    dayList: {
      get() {
        return this.$t('day');
      }
    }
  },
  watch: {
    day(val) {
      this.rotates = val;
    }
  }
};
</script>

<style scoped lang="stylus">
ul
  z-index 4
  for n in 1..31
    li:nth-child({n})
      transform rotate(n * 11.6129deg) translateX(120px)
</style>