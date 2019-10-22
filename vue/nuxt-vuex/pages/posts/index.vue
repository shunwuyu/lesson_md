<template>
  <div>
    <h1 class="display-1 my-5">List</h1>
    <!--  <div
      v-for="post in posts"
      :key="post.id">
      {{post.title}}
    </div> -->
    <div class="row justify-content-center">
      <div class="col-md-6"
       v-for="post in posts"
       :key="post.id">
        <!-- <nuxt-link  :to="{name: 'posts-id', params: { id: post.id }}"> -->
          <div class="card my-3">
            <!-- <img :src="post.imageUrl" :alt="post.title"
            class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">{{post.title}}</h5>
              <h6 class="card-subtitle mb-2 text-black-50">{{post.author}}</h6>
            </div> -->
            <nuxt-link :to="{name: 'posts-id', params: {id: post.id}}">
              <img :src="post.imageUrl" :alt="post.title"
            class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{post.title}}</h5>
                <h6 class="card-subtitle mb-2 text-black-50">{{post.author}}</h6>
              </div>
            </nuxt-link>
            <div class="card-foote">
              <button class="btn btn-link"
              @click="destroyAction(post.id)"
              >Delete</button>
            </div>
          </div>
        <!-- </nuxt-link> -->
       </div>
    </div>
  </div>
</template>
<script>
export default {
  // async asyncData({ $axios }) {
  //   const posts = await $axios.$get('http://localhost:3334/posts')
  //   return {
  //     posts
  //   }
  // },
  async fetch({ $axios, store }) {
    const response = await $axios.get('http://localhost:3334/posts');
    store.commit('posts/setList', response.data);
  }, 
  computed: {
    posts() {
      return this.$store.state.posts.list;
    }
  },
  methods: {
    destroyAction(id) {
      this.$store.dispatch('posts/destroyAction', id);
    }
  },
  head () {
    return {
      title: 'Posts'
    }
  }
}
</script>