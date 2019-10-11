<template>
  <div>
    {{ time }}
    <el-child @elChildMounted="handleMouted"/>
  </div>
</template>
<script>
import mixins from './mixins';
import ElChild from './Child';
export default {
  mixins: [mixins],
  data() {
    return {
      theme: 'blue'
    }
  },
  methods: {
    handleMouted(data) {
      console.log('mounted data', data)
    }
  },
  components: {
    ElChild
  },
  provide: {
    theme: 'blue'
  },
}
</script>
<style scoped>

</style>