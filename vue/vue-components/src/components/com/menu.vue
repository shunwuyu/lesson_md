<template>
  <div class="menu">
    {{message}}
    {{name.name}}
  </div>
</template>

<script>
import bus from '@/common/bus'
export default {
  inject: ['name'],
  data () {
    return {
      message: 'dasdasd'
    }
  },
  created () {
    let self = this
    bus.$on('todo', (val) => {
      console.log(val)
      self.message = val
    })
  },
  mounted () {
    console.log(this.name);  // Aresn
  }
}
</script>

<style>

</style>
