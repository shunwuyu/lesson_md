<template>
  <div id="app">
    <div v-for="(img, index) in images" :key="index">
      <img v-lazy="img" alt="" >
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images:[
        'https://img.36krcdn.com/20200311/v2_9268bbab50f748eab8d13737a42cfaf7_img_000?x-oss-process=image/resize,m_mfit,w_432,h_288/crop,w_432,h_288,g_center',
        'https://img.36krcdn.com/20200311/v2_33a5cf60f86d4555ab052904a55540cc_img_000?x-oss-process=image/resize,m_mfit,w_432,h_288/crop,w_432,h_288,g_center',
        'https://img.36krcdn.com/20200310/v2_67907ff0d33c487fa2f8ea799a5d54b8_img_jpg',
        'https://img.36krcdn.com/20200311/v2_f97c3864e0fd48b2ae4d80875b31e234_img_000?x-oss-process=image/resize,m_mfit,w_432,h_288/crop,w_432,h_288,g_center',
        'https://img.36krcdn.com/20200310/v2_7c147c86f5b54bc59e7a24c6f59866b2_img_png',
        'https://img.36krcdn.com/20200310/v2_9990966e1a6949bdaf56c0da2d6d1500_img_png',
        'https://img.36krcdn.com/20200311/v2_89fe8e79b515499fba0e11b1c8da2437_img_png',
        'https://img.36krcdn.com/20200310/v2_a0dcf35f9c95409c8284c85c6adfdb56_img_png',
        'https://img.36krcdn.com/20200309/v2_a6562607d13042138322f579b5ef85c2_img_png',
        'https://img.36krcdn.com/20200311/v2_e22b239fd17449749147693d1a1276e1_img_000?x-oss-process=image/resize,m_mfit,w_432,h_288/crop,w_432,h_288,g_center',
        'https://img.36krcdn.com/20200310/v2_1279fee7f48742378f4821e9ee112641_img_png',
        'https://img.36krcdn.com/20200311/v2_fd175b4f71334c26bc01f5775418f9b0_img_png',
        'https://img.36krcdn.com/20200311/v2_47dc6936e77e477999a6dfd73eae6416_img_png'
      ]
    }
  }
}
</script>
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
