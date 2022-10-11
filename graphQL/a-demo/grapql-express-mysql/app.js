var express = require('express');
var app = express();
var graphqlHTTP = require('express-graphql').graphqlHTTP;
var userSchema =require ('./graphql/user/schema');
app.use('/graphql', graphqlHTTP({
  schema: userSchema,
  graphiql: true, //启用GraphiQL
}));

module.exports = app;