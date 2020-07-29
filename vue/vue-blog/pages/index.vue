<template>
  <div class="index container">
    <base-list></base-list>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from 'vuex'

export default {
  name: 'Index',
  async fetch({ store, route }) {
    const { article } = store.state
    // console.log(article)
    store.commit('article/setArticlesNull')
    await Promise.all([
      store.dispatch('article/getArticles', { page: 1 })
    ])
    
  },
  mounted() {
    fetch('/api/articles')
      .then(data => data.json())
      .then(data => {
        console.log(data);
      })
  },
}
</script>
<style lang="less">
  
</style>