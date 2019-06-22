[source](https://juejin.im/post/5c87b1776fb9a049ac7a0247)

GraphQL 是一种面向数据的 API 查询风格。

传统的 API 拿到的是前后端约定好的数据格式，GraphQL 对 API 中的数据提供了一套易于理解的完整描述，客户端能够准确地获得它需要的数据，没有任何冗余，也让 API 更容易地随着时间推移而演进，还能用于构建强大的开发者工具。

- GraphQL 的操作类型可以是 query、mutation 或 subscription，描述客户端希望进行什么样的操作
  1. query 查询：获取数据，比如查找，CRUD 中的 R
  2. mutation
  3. substription 订阅：当数据发生更改，进行消息推送

