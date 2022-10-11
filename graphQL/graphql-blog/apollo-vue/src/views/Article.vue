<template>
  <div class="apollo">
    <h1>This is an apollo-client demo</h1>
    <div class="container">
      <div v-if="$apollo.loading">Loading...</div>
      <div class="article" v-for="item in articles" :key="item.id">
        <router-link
          :class="{isRead: item.isRead}"
          @click.native="mutationIsRead(item.id)"
          :to="{ name: 'content', params: { id: item.id } }"
        >{{ item.title }}</router-link>
        <time>{{ item.date }}</time>
        <div class="content">
          <h2>前言</h2>
          <p>{{ item.introduction }}</p>
        </div>
        <hr>
      </div>
    </div>
    <ul class="category">
      <li v-for="item in categories" :key="item.name">{{ item.name }} ({{ item.num }})</li>
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";
const fetchDataGql = gql`
  {
    fetchArticles {
      id
      title
      date
      introduction
      category
      isRead
    }
    getAllCategories {
      num
      name
    }
  }
`;
const mArticleISRead = require("../graphql/ArticleIsRead.gql");
export default {
  name: "Apollo",
  data() {
    return {
      articles: [],
      categories: []
    };
  },
  methods: {
    mutationIsRead(id) {
      this.$apollo.mutate({
        mutation: mArticleISRead,
        variables: {
          id
        },
        update: (store, { data: { articleIsRead } }) => {
          console.log(articleIsRead);
        }
      });
    }
  },
  apollo: {
    fetchData() {
      const vm = this;
      return {
        query: fetchDataGql,
        update(data) {
          vm.articles = data.fetchArticles;
          vm.categories = data.getAllCategories;
        }
      };
    }
  }
};
</script>

<style scoped>
.apollo .container {
  width: 900px;
  margin: 0 auto;
}
.apollo .article {
  text-align: left;
  margin: 1.6rem 0 2rem;
}
.apollo .article a {
  display: block;
  margin-bottom: 0.3rem;
  border-bottom: 1px solid #eee;
  color: #2e2e2e;
  text-decoration: none;
  font-size: 1.4rem;
}
.apollo .article a.isRead {
  opacity: 0.4;
}
.apollo hr {
  margin: 2rem auto;
  width: calc(100% - 4px);
  border: 2px dashed #a4d8fa;
  background: #fff;
}
.category {
  position: fixed;
  top: 200px;
  right: 230px;
}
</style>