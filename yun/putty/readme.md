[download](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.htmlss)
[article](https://juejin.cn/post/6844903701459501070)
Nginx (engine x) 是一个高性能的HTTP和反向代理web服务器

前提 已领一台服务器 IP 地址 124.71.174.51
安装putty 

1. 用yum进行安装必要程序
```
  yum -y install gcc gcc-c++ autoconf pcre-devel make automake
  yum -y install wget httpd-tools vim
```

2. 基于Yum的方式安装Nginx
  yum list | grep nginx
  yum install nginx
  nginx -v

3. nginx 启动
  ps  process status aux 参数  格式
  ps aux | grep nginx    管道  nginx  找出nginx 
  配置 更多 更改安全组 default 配置规则

4. http://124.71.174.51 可以访问 
  nginx -s stop 
  修改配置文件

5. 建立目录
  cd ..
  - 进入系统后，在目录下建立了一个jsgui的文件夹。
  - 进入 jsgui文件夹 ,命令是 cd jsgui
  - 分别使用mkdir建立 html
    vi /etc/nginx/nginx.conf   root  /jsgui/app
    index.html   
    nginx -s reload 

6. git 项目创建 
  clone 到本地
  https://blog.csdn.net/xwj1992930/article/details/96428998
  wget https://mirrors.edge.kernel.org/pub/software/scm/git/git-2.9.0.tar.gz
  tar -zxvf git-2.9.0.tar.gz
  cd git-2.9.0
  ./configure --prefix=/usr/local  // 指定安装目录
  make   // 编译成二进制文件
  sudo make install   // 安装
  git --version
  sudo yum install -y zlib-devel perl-ExtUtils-MakeMaker   依赖的包
  
  
  git clone --recursive git://github.com/shunwuyu/jsgui.git

  cd /etc/nginx/
  nginx -s reload

  
  
