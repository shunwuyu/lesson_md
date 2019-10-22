<template>
  <div class="container my-5">
    <h1 class="display-1 my-5">
      <!-- Post {{ $route.params.id }} -->
      {{post.title}}
    </h1>
    <img :src="post.imageUrl"
    :alt = "post.title"
     class="rounded w-100 mb-3">
    <div>
      {{post.description}}
    </div>
  </div>
</template>
<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id)
  },
  async asyncData({ $axios, params, error }) {
    try {
      const post = await $axios.$get(`http://localhost:3334/posts/${params.id}`)
    // console.log(`http://localhost:3334/posts/${params.id}`)
      return {
        post
      }
    } catch(e) {
      error({ statusCode: 404, message: 'Post not found.'})
    }
    
    // return post
  },
  
  head () {
    return {
      title: this.post.title
    }
  }
}
</script>
