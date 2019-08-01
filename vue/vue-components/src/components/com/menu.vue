<template>
  <div class="menu">
    <slot name="menu1"></slot>
    {{message}}
    {{name.name}}
    <slot name="menu2"></slot>
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
