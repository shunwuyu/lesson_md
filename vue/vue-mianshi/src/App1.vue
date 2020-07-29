<template>
  <div id="app">
    <event-a @sendMsg="receiveMsg"/>
    <event-b :message="msg" />
    <!-- <directive /> -->
    <!-- <next-tick /> -->
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/> -->
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
// import Directive from '@/components/Directive.vue' 
import NextTick from '@/components/NextTick.vue' 
import EventA from '@/components/EventA.vue' 
import EventB from '@/components/EventB.vue' 
export default {
  data() {
    return {
      msg: ''
    }
  },
  mounted() {
    // this.$eventBus.$emit('eventTarget','这是eventTarget传过来的值')

  },
  methods: {
    receiveMsg(msg) {
      this.msg = msg;
    }
  },
  components: {
    // Directive
    NextTick,
    EventA,
    EventB
  }
}
</script>