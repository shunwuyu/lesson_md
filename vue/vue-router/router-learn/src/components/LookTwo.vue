<template>
  <div class="look">{{mseeage}}
    <p>接受的参数：{{$route.params.id}}</p>
  </div>
</template>

<script>
export default {
  name: 'Look',
  data () {
    return {
      mseeage: '瞅你好帅'
    }
  }
}
</script>

<style scoped>
.look{
  font-size: 26px;
}
</style>
