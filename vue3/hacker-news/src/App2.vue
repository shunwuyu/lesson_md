<template>
  <div class="container mb-5">
    <nav-bar></nav-bar>
    <div style="max-width:90%;width:500px;margin:auto">
      <b v-if="loading">Loading</b>
      <post :detail="post" v-for="post in posts.sort((a,b) => b.score - a.score)" :key="post"></post>
    </div>
  </div>
</template>
<script >
import API  from './api/index'
import NavBar from "./components/NavBar.vue";
import Post from "./components/Post.vue";
export default {
  data() {
    return {
      posts: [],
      loading: true
    };
  },
  components: {
    'nav-bar':NavBar,
    'post': Post
  },
  mounted() { 
    API.getTopStories().then((response) => {
      response.data.forEach((id, i) => {
        if (i > 30) {
          return;
        }
        API.fetchItem(id).then((resp) => {
          this.loading = !this.loading;
          this.posts.push(resp.data);
          console.log(this.posts)
        });
      });
    });
  }
}
</script>