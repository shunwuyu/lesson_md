var {
  GraphQLInt,
  GraphQLString, 
  GraphQLList,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLEnumType,
  GraphQLFloat
} = require('graphql');
var util = require("../../util/util");
var $sql = require('../../dao/userSqlMapping');

const Unit=new GraphQLEnumType({
  name:'Unit',
  description:"单位",
  values: {
      MM: {value: 'MM'},
      cm: {value: 'cm'},
      mm: {value: 'mm'},
  }
});


const User=new GraphQLObjectType({
  name:'User',
  description:"用户信息实体",
  fields: () => {
      return ({
          id: {type: new GraphQLNonNull(GraphQLInt)},
          name: {type: new GraphQLNonNull(GraphQLString)},
          sex: {type: new GraphQLNonNull(GraphQLString)},
          intro: {type: new GraphQLNonNull(GraphQLString)},
          skills: {type: new GraphQLNonNull(new GraphQLList(GraphQLString))},
          stature: {
              type: GraphQLFloat,
              args: {
                  unit: {type: Unit}
              },
              resolve: function (user, {unit}) {
                  if (unit == 'MM') {
                      return user.stature/100;
                  } if (unit == 'cm') {
                      return user.stature;
                  }else if (unit == 'mm') {
                      return user.stature*10;
                  }
              }
          },
      });
  },
});

module.exports = {
  query:{
    user:{
      type:User,
      description:'根据id查询单个用户',
      args: {
          id: {type: new GraphQLNonNull(GraphQLInt)}
      },
      resolve:async function (source,{id}) {
        const results = await util.searchSql($sql.queryById, [id]);
        // console.log(results[0]['id'], '???????????????')
        return results[0]
      }
    },
  }
}