var {
  GraphQLObjectType,
  GraphQLSchema,
} = require('graphql');
const userSchema = require('./user');

const Query=new GraphQLObjectType({
  name:'UserQuery',
  description:'用户信息查询',
  fields:()=>(Object.assign({},
      userSchema.query,
  )),
});

const schema = new GraphQLSchema({
  query: Query
});
module.exports = schema;