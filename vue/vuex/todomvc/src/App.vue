<template>
  <div>
    <counter />
  </div>
</template>
<script>
// 两个兄弟组件， 共享count 数据  
// count 不应该属于Counter组件私有， data(){} , props 
import Counter from './components/Counter';
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
  },
  components: {
    'counter': Counter
  }
}
</script>
<style>
  
</style>