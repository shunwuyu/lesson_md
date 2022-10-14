const { ApolloServer, gql } = require('apollo-server-express');
const express = require('express');
const app = express();

const port = process.env.PORT || 4000; // 后加2
// 类型定义
let notes = [
  { id: '1', content: 'This is a note', author: 'Adam Scott' },
  { id: '2', content: 'This is another note', author: 'Harlow Everly' },
  { id: '3', content: 'Oh hey look, another note!', author: 'Riley Harrison' }
];

const typeDefs = gql`
  scalar DateTime
  type Note {
    id: ID!
    content: String!
    author: User!
    favoriteCount: Int!
    favoritedBy: [User]
    createdAt: DateTime!
    updatedAt: DateTime!
  }
  type User {
    id: ID!
    username: String!
    email: String!
    avatar: String
    notes: [Note!]!
    favorites: [Note!]!
  }
  type Query {
    hello: String
    notes: [Note!]!
    note(id: ID!): Note!
  }
  type Mutation {
    newNote(content: String!):Note!
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello world！',
    notes: () => notes,
    note: (parent, args) => {
      return notes.find(note => note.id === args.id);
    }
  },
  Mutation: {
    newNote: (parent, args) => {
      let noteValue = {
        id: String(notes.length + 1),
        content: args.content,
        author: 'Adam Scott'
      };
      notes.push(noteValue);
      return noteValue;
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app, path: '/api' });

app.get('/', (req, res) => res.send('你好'));
// app.listen(4000, () => console.log('Listening on port 4000!'));
app.listen(port, () =>  console.log(`Server running at http://localhost:${port}${server.graphqlPath}`));