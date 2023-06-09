<script setup>
import Login from './Login.vue'
import useFetch from './hooks/useFetch'
const { data, error, loading } = useFetch('https://hacker-news.firebaseio.com/v0/topstories.json')
</script>

<template>
  <Login />
  <div v-if="loading">加载中</div>
  <div>{{JSON.stringify(data)}}</div>
  <div v-if="error">{{error}}</div>
</template>

<style scoped>
</style>
