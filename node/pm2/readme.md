[使用pm2躺着实现负载均衡](https://blog.csdn.net/qq_17475155/article/details/53823862)

Node 进程管理
pm2 是一个带有负载均衡功能的Node应用的进程管理器
单线程应用 串行一次执行 
1、pm2可以把你的应用部署到服务器所有的CPU上
  pm2 start app.js -i max
