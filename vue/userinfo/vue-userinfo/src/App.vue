<template>
  <div id="app">
    {{$store.state.userInfo}}
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/order">Order</router-link> | 
      <router-link to="/login">Login</router-link>
    </div>
    <router-view/>
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
export default {
  mounted() {
    // fetch('/api/')
    //   .then(data => data.json())
    //   .then(data => {
    //     console.log(data)
    //   })
  },
}
</script>