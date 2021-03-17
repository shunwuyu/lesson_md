[source](https://juejin.cn/post/6884415401569026056)

1. npm i apollo-server-express
npm i  graphql
2. const typeDefs = gql`
  type Query {
    hello: String
  }
`
3. const resolvers = {
  Query: {
    hello: () => 'Hello world！'
  }
}

4. const server = new ApolloServer({ typeDefs, resolvers });

5. notes
  query {
  notes {
    id,
    content,
    author
  }
}

最酷的方面之一是我们可以删除任何请求的字段
使用数据的客户端可以控制每个请求中发送的数据量，并将该数据限制在所需的范围内

- 带有特定id值的笔记
  note: (parent, args) => {
    return notes.find(note => note.id === args.id);
  }
  note: (parent, args) => {
      return notes.find(note => note.id === args.id);
    }
