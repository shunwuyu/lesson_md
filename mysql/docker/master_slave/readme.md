[source](https://www.cnblogs.com/songwenjie/p/9371422.html)

- 拉取镜像
  docker pull daocloud.io/library/mysql:5.7.4
- 运行主从
  docker run -p 3339:3306 --name mysql-master -e MYSQL_ROOT_PASSWORD=123456 -d abd3fc84b335
  docker run -p 3340:3306 --name mysql-slavel -e MYSQL_ROOT_PASSWORD=123456 -d abd3fc84b335

- docker exec -it 3804c346ec58 /bin/bash  进入master
- 安装vim
  apt-get update
  由于外地的源
  mv /etc/apt/sources.list /etc/apt/sources.list.bak
  echo "deb http://mirrors.163.com/debian/ jessie main non-free contrib" >> /etc/apt/sources.list
  echo "deb http://mirrors.163.com/debian/ jessie-proposed-updates main non-free contrib" >>/etc/apt/sources.list
  echo "deb-src http://mirrors.163.com/debian/ jessie main non-free contrib" >>/etc/apt/sources.list
  echo "deb-src http://mirrors.163.com/debian/ jessie-proposed-updates main non-free contrib" >>/etc/apt/sources.list
  #更新安装源
  apt-get update 

- docker start mysql-master
