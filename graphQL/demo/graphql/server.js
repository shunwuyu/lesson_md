// 让前段自由查询它想要的数据
var { graphql, buildSchema } = require('graphql');
// construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

var root = {
  hello: () => {
    return 'Hello world!';
  }
}

module.exports = function(query) {
  return graphql(schema, query, root)
    .then((response) => {
      // console.log(response)
      return response;
    })
}


