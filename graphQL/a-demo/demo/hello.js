const express = require('express')
const { buildSchema } = require('graphql')
const graphqlHTTP = require('express-graphql').graphqlHTTP;

// 构建schema，这里定义查询的语句和类型
const schema = buildSchema(`
    type Account {
      name: String
      age: Int
      sex: String
      department: String
      salary(city: String): Int
    }
    type User {
      name: String
      age: Int
    }
    type Query {
        hero: String
        user: User
        getHero(teamName: String!): [String]
        account(username: String): Account
    }
  
`)

// 定义查询所对应的 resolver，也就是查询对应的处理器
const root = {
    account({ username}) {
      const name = username;
      const sex = 'man';
      const age = 18;
      const department = '开发部';
      const salary = ({city}) => {
          if(city === "北京" || city == "上海" || city == "广州" || city == "深圳") {
              return 10000;
          }
          return 3000;
      }
      return {
          name,
          sex,
          age,
          department,
          salary
      }
  },

    hero: () => {
        return "I'm iron man"
    },
    user: () => {
      return {
        name: 'leo',
        age: 18
      }
    },
    getHero:({teamName}) => {
      const hero = {
        '三国': ['张飞', '刘备', '关羽'],
        '复仇者联盟': ['钢铁侠', '美国队长', '绿巨人']
      }
      return hero[teamName]
    }
}

const app = express()

// 将路由转发给 graphqlHTTP 处理
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}))
app.use(express.static('public'))
app.listen(3000)
