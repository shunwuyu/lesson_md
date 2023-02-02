<template>
    <div class="container mb-5">
      <nav-bar></nav-bar>
      <div style="max-width:90%;width:500px;margin:auto">
        <b v-if="loading">Loading</b>
        <post :detail="post" v-for="post in state.posts.sort((a,b) => b.score - a.score)" :key="post"></post>
      </div>
    </div>
  </template>
  <script setup>
  import { reactive, onMounted } from 'vue'
  import API  from './api/index'
  import NavBar from "./components/NavBar.vue";
  import Post from "./components/Post.vue";
  const state = reactive({
        posts: [],
        loading: true
  })
  onMounted(() => {
    // console.log('---')
    API.getTopStories().then((response) => {
        console.log(response);
        response.data.forEach((id, i) => {
          if (i > 30) {
            return;
          }
          
          API.fetchItem(id).then((resp) => {
            state.loading = !state.loading;
            state.posts.push(resp.data);
          });
        });
      });
  })
  </script>