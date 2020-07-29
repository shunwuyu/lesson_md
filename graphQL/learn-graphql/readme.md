- 查看第一篇文章 /posts/show/1  url 设计对吗?
  /posts/1   GET 方法表示show 
  比如网上汇款，从账户1向账户2汇款500元，错误的URI是：
  POST /accounts/1/transfer/500/to/2 把动词transfer改成名词transaction，资源不能是动词
  POST /transaction HTTP/1.1  
  from=1&to=2&amount=500.00
-  接口服务有哪些呢? 

- node 要使用import 代替require , 怎么办?
  
GraphQL 是一种接口的查询语言，你可以用 GraphQL 为客户端提供数据，比如应用的前端，或者移动端  它比我们经常用的 REST 更灵活，可以替代应用的 REST 接口    

- 每一个URI代表一种资源；
- 客户端和服务器之间，传递这种资源的某种表现层 get post put delete
- 客户端通过四个HTTP动词，对服务器端资源进行操作，实现"表现层状态转化"。 
json-server http://localhost:3300/posts/1/comments

Facebook，Github，shopify 这些网站的生产环境都已经在使用 GraphQL 了 ..
Express 服务 .. 让它支持 GraphQL .. 然后去定义查询的 Schema 
GraphiQL 的客户端工具去测试定义好的查询 Schema

这个包可以帮我们用 Express 创建 GraphQL 的 HTTP 服务器

- 启动graphql  
- 配置schema
query getGreeting {
  greeting
}

query getPosts {
  posts {
    id,
    title,
    content
  }
}

query getPost {
  post(id: "1") {
    id,
    title, 
    content
  }
}

query getPost {
  post(id: "1") {
    id,
    title,
    author {
      name
    }
  }
}

query getPosts {
  posts {
    id,
    title,
    author {
      name
    }
  }
}

mutation createPost {
  createPost(
    title: "hello ~",
    content: "大家好。",
    author: "1"
  ) {
    id,
    title,
    content,
    author {
      name
    }
  }
}


mutation createPost {
  updatePost(
    id:"3",
    title: "您好 ~",
  ) {
    id,
    title,
    author {
      name
    }
  }
}

mutation createPost {
  deletePost(
    id:"3"
  ) {
    id
  }
}