<template>
  <div class="look">
    {{mseeage}}
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Look',
  data () {
    return {
      mseeage: '看我呀！'
    }
  }
}
</script>

<style scoped>
.look{
  font-size: 26px;
}
</style>
