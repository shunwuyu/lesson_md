[安装](https://blog.csdn.net/myNameIssls/article/details/99702877)
- docker pull daocloud.io/library/rabbitmq:3.4.2
- docker run --name rabbitmq -d -p 15672:15672 -p 5672:5672 2fbd2bc4d2be
  --name 名字
  -d 后台运行容器 并返回容器ID
- 安装完后并不能正常启动
  https://www.cnblogs.com/yuebo/p/11732769.html 解决
  docker exec -it rabbitmq sh
  rabbitmq-plugins enable rabbitmq_management
- 用户名密码无法登录 https://blog.csdn.net/weixin_42697074/article/details/103532105
