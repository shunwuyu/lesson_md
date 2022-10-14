const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Article {
    id: Int!
    title: String!
    date: String!
    introduction: String!
    category: String
    isRead: Boolean!
  }
  type ArticleContent {
    id: Int!
    html: String!
  }
  type Category {
    num: Int!,
    name: String!
  }
  type Query {
    fetchArticles: [Article]
    getAllCategories: [Category]
    getArticleContent(id: Int!): ArticleContent
  }
  type Mutation {
    articleIsRead(id: Int!): Article
  }
`

module.exports = typeDefs;