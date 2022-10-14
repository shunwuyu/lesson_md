const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const PORT = 4000;

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: `/graphql`,
    settings: {
      "editor.theme": "light"
    }
  }
});

server.applyMiddleware({ app });

app.listen(PORT, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);