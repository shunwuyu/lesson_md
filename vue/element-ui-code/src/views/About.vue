<template>
<div>
  About
</div>
</template>
<script>
export default {
  data() {
    return {
      msg: 0
    }
  },
  mounted () {
    // this.msg = 1
    // this.msg = 2
    // this.msg = 3
    this.msg = 'end'
      console.log('1')
      setTimeout(() => { // macroTask
         console.log('3')
      }, 0)
      Promise.resolve().then(function () { //microTask
        console.log('promise!')
      })
      this.$nextTick(function () {
        console.log('2')
      })
  },
  watch: {
    msg () {
      console.log(this.msg)
    }
  }
}
</script>