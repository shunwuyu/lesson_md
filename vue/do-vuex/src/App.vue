<template>
  <div>
   {{count}}
  </div>
</template>

<script>

export default {
  created() {
    // console.log('打印出this.$store.state.count的结果',this.$store.state.count);
    console.log('打印出this.$store.getters.getStatePlusOne的结果',this.$store.getters.getStatePlusOne);
  },
  mounted() {
    setTimeout(() => {
      this.$store.commit('incrementFive');
      console.log('store state自增5后的结果', this.$store.state.count);
    }, 2000);
    setTimeout(() => {
      this.$store.dispatch('countPlusSix');
      console.log('store dispatch自增6后的结果', this.$store.state.count);
    }, 3000);
  },
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
}
</script>