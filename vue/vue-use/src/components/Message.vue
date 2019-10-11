<template>
  <div>
    {{title}}
  </div>
</template>
<script>
export default {
  name: 'ElMessage',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>
<style>
  
</style>