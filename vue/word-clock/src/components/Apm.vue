<template>
  <ul :style="{ transform: `rotate(${rotates * -30}deg)` }">
    <li
      v-for="(item, index) in apmList"
      :key="index"
      :class="{ hover: index == rotates - 1 }"
    >
      {{ item }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "apm",
  props: ["apm"],
  data() {
    return {
      rotates: ""
    };
  },
  computed: {
    apmList: {
      get() {
        return this.$t("apm");
      }
    }
  },
  watch: {
    apm(val) {
      this.rotates = val;
    }
  }
};
</script>

<style scoped lang="stylus">
ul {
  z-index: 6;
  for n in 1..2 {
    li:nth-child({$i}) {
      transform: rotate(n * 30deg) translateX(230px);
    }
  }
}
</style>