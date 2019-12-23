## 内置模块cluster  更简便的 多核处理
快速创建多核能力的服务程序

父子进程  rpc 调用 双全工通信
http服务的能力分发出去？

浏览器 -》 主进程 master node 不跑http服务
fork 三个子node, 各跑一个http服务
第一个子进程处理完， 给主进程， 最后返回给用户。 
每个核跑了一个node.js 进程， 最大化的使用了多核， 非常好的性能优化
不需要写这些代码， cluster 

cluster fork 出一堆子进程， 
压力测试   50 的并发， 次数400
npm install node-ab -g

200多 qps  大概可以300个请求量 QPS:QueriesPerSecond意思是“每秒查询率”,是一台服务器每秒能够相应的查询次数,

nab http://localhost:3000 --increase 50 --milliseconds 400

