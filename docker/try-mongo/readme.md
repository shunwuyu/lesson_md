[source](https://juejin.im/post/5db7b549f265da4d556cecbc)

- docker build -t node .
- docker pull daocloud.io/library/mongo:2.7.6
- docker run -p 27017:27017 -v $PWD/db:/data/db -d --name mongodb 18400f87db91
- docker run -d --name nodeapp --link=mongodb:mongodb -p 3000:3000 node
  --name 名字  nodeapp    --link=mongodb  连接  
