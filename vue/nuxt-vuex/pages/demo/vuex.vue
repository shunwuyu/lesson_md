<template>
  <div class="container">
    <!--1  <h1 class="display-1 my-5">Demo</h1> -->
    <h1 class="display-1 my-5">{{ pageName }}</h1>
    <!-- <span 
    @click="add"
    class="badge badge-pill badge-primary">Count {{ count }}</span> -->
    <span 
    @click="addAction"
    class="badge badge-pill badge-primary">Count {{ count }}</span>
    
  </div>
</template>
<script>
export default {
  computed: {
    pageName() {
      return this.$store.state.demo.pageName
    },
    count () {
      return this.$store.state.demo.count
    }
  },
  methods: {
    add () {
      // this.$store.commit('demo/add');
      this.$store.commit('demo/add', 2);
    },
    addAction() {
      this.$store.dispatch('demo/addAction', 3);
    }
  }
}
</script>
