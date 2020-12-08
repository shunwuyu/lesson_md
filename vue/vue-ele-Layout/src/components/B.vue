<template>
  <div>
    {{ time }}
  </div>
</template>
<script>
import mixins from './mixins';
export default {
  mixins: [mixins],
  data() {
    return {
      time: '2017'
    }
  },
  // data() {
  //   return {
  //     time: null
  //   }
  // },
  // methods: {
  //   getTimeFromBackend() {
  //     this.time = '2019-10-01'
  //   }
  // },
  // mounted() {
  //   this.getTimeFromBackend(); 
  // }
}
</script>
<style scoped>

</style>