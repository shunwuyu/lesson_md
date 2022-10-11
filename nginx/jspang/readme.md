cat /etc/redhat-release
无所不能， 创造世界.当一个属于你的世界做好后，你需要展示给朋友，发布于众人，让爱你的人欣赏。
- docker 启动
  docker run -it daocloud.io/library/centos /bin/bash
  docker run -it -p 3001:80  daocloud.io/library/centos /bin/
  bash
  docker run -it -p 3001:80 --privileged daocloud.io/library/centos /bin/
  bash

  删除所有docker container
  
- Nginx 是一款轻量级的HTTP服务器， 采用事件驱动的异步非阻塞处理方式框架， 这让其具有极好的IO性能， 时常用于服务端的反向代理和负载均衡。
- Nginx优点
  1. 支持海量高并发， 采用IO多路利用epoll. 5万并发链接， 实际可支撑2-4万并发连接数。
  2. 内存消耗少，3万并发链接下， 开启10个Nginx进程150M内存。
  3. 免费使用
  4. 配置简单。
- 安装yum
  yum -y install gcc gcc-c++ autoconf pcre-devel make automake
  gcc GNU Compiler Collection GNU 开发的编程语言编译器 
  GCC是自由软件过程发展中的著名例子，由自由软件基金会以GPL协议发布。
  因为GNU的设计类似Unix，但它不包含具著作权的Unix代码。GNU's Not Unix!
  Autoconf是一个用于生成shell脚本的工具,可以自动配置软件源代码以适应多种类似POSIX的系统。
  pcre 正则表达式
  make 编译  wget 远程拉取  httpd-tools 
  一个超简单的 http服务器
- 加了些目录 在/jspang
  配置源
  /etc/yum.repos.d/nginx.repo
- rpm -ql nginx 
  安装到了哪里
  \# 运行用户， 默认即是nginx, 可以不进行设置
  user nginx;
  #Nginx进程， 一般设置为和CPU核数一样
  worker_processes 1;
  #错误日志存放目录
  error_log /var/log/nginx/error.log;
  #进程pid存放位置
  pid /var/run/nginx.pid;

  events {
    worker_connections;  #单个后台进程的最大并发数
  }
  http {
    include /etc/nginx/mime.types; #文件扩展名及类型映射表
    default_type application/octet-stream; #默认文件类型
    #设置日志模式
    log_format main '$remote_addr - $remote_user [$time_local] "$request" $status $body_bytes_sent "$http_referer" '
    '"$http_user_agent" "$http_x_forwarded_for"'
    access_log /var/log/nginx/access.log main;
    sendfile  on;
    #tcp_nopush  on;
    keepalive_timeout 65; #保持连接的时间， 也叫超时时间  连接池
    #gzip on;  #开启gzip压缩
    include /etc/nginx/conf.d/*.conf; 
  }

  default.conf  配置项文件
  server {
    listen 80; #配置监听商品
    server_name localhost; //配置域名
    location / {
      root /user/share/nginx/html  #服务默认启动目录
      index index.html index.htm #默认访问文件
    }

    #error_page 404  /404.html #配置404页面
    #redirect server error pages to the static page /50x.html
    error_page 500 502 503 504 /50x.html;
    location = /50x.html {
      root /usr/share/nginx/html;
    }
    
  }

- 查看进程
  ps aux | grep nginx
  a 所有程序
  u 以用户为主的格式来显示程序状态
  x 显示所有程序， 不以终端机来区分
- centos 7 安装 netstat
yum install net-tools

## Nginx 设置虚拟主机
一台物理主机服务器上划分出很多个磁盘空间， 每个磁盘空间都是一个虚拟主机
利用虚拟主机把多个不同域名的网站布在一台服务器上。
端口号， 基于IP, 和基于域名， 
Nginx 监听多个端口， 不同端口， 区分不同的网站
yum -y install curl
使用curl 来测试 curl http://localhost:8001

## Nginx 使用域名设置虚拟主机
域名和公网IP才可以访问。 
nginx.jspang.com   Nginx 首页位置
nginx2.jspang.com  8001

## 反向代理
proxy 代理的是服务器， 访问哪个server由Nginx 来控制。 
一般代理是代理客户端， 反向代理是代理服务器。 
负载均衡、缓存。均匀地分配到这个集群中所有的服务器上， 服务器压力的平均分配， 也叫负载均衡。

## Gzip压缩配置
变为原来的30%, 体验更好， 速度更快。
Accept-Encoding:gzip,
Content-Encoding:gzip
