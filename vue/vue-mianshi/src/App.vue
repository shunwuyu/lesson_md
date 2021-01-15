<template>
  <div id="app">
    <p>FullName: {{fullName}}</p>
    <p>FirstName: <input type="text" v-model="firstName"></p>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      firstName: '安培',
      lastName: '罗',
      fullName: '',
      
    }
  },
  computed: {
    // fullName() {
    //   return this.firstName + ' ' + this.lastName
    // }
  },
  watch: {
    // firstName(newName, oldName) {
    //   this.fullName = newName + ' ' + this.lastName;
    // }
    firstName: {
      handler(newName, oldName) {
        this.fullName = newName + ' ' + this.lastName;
      },
      // 代表在wacth里声明了firstName这个方法之后立即先去执行handler方法
      immediate: true
    },
    
  },
  methods: {
   
  }
}
</script>
