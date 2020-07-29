import Vue from 'vue'
import Router from 'vue-router'
import Article from './views/Article.vue'
// import Content from './views/Content.vue'
// import Category from './views/Category.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    // {
    //   path: '/',
    //   name: 'home',
    //   component: Home
    // },
    {
      path: '/',
      redirect: '/article'
    },
    {
      path: '/article',
      name: 'article',
      component: Article
    }
  ]
})