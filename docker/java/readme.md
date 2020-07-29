[source](https://juejin.im/post/59c5fd465188254f5d174bfa)

- docker run -it -p 8080:8080 --rm  daocloud.io/library/tomcat:8.0.45-jre7
  i 以交互模式运行容器  与 t同用
  t 为容器分配一个伪输入终端   
  --rm 自动清理容器内部的文件系统
  -d 后台运行容器
  -e 设置环境变量
- docker run -d -p 3306:3306 -e MYSQL_ROOT_PASSWORD=000000 -e MYSQL_DATABASE=yemeishu_database daocloud.io/mysql:latest
  docker exec -it d50af5222a460b0b5b50ed09dc189653f8ff50797a288fe155d6c8766e8daaed /bin/bash
  mysql -uroot -p

- JPress博客
  docker build -t jpress:latest .
- docker run -d -p 8888:8080 jpress
- apt-get update
  apt-get install vim   ip问题