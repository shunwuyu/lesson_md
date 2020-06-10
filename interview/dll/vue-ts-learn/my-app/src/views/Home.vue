<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
   	<HelloWorld v-for="blogPost in blogPosts" :post="blogPost" :key="blogPost.title" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld, { Post } from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
    private blogPosts: Post[] = [
        {
          title: 'My first blogpost ever!',
          body: 'Lorem ipsum dolor sit amet.',
          author: 'Elke',
          datePosted: new Date(2019, 1, 18),
        },
        {
          title: 'Look I am blogging!',
          body: 'Hurray for me, this is my second post!',
          author: 'Elke',
          datePosted: new Date(2019, 1, 19),
        },
        {
          title: 'Another one?!',
          body: 'Another one!',
          author: 'Elke',
          datePosted: new Date(2019, 1, 20),
        },
      ];
}
</script>