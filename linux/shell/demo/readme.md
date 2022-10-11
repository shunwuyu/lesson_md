- 启动docker centos
  docker pull daocloud.io/library/centos:7.1.1503
  docker run -it e1430271e2f9 /bin/bash
  docker start -i 61c3bee1d218 
- 进入一个文件夹， 列出所有文件 及相应大小及总大小
  cd 
  ls
  pwd 当前路径
  du  文件大小 
    -sh 总大小
    -sh * 每个文件
- 安装vim 
  yum -y install vim*
- sh 后缀
  1.sh
- 改变权限
  chmod u+x 1.sh   u用户， 只给这个文件的所有者执行权限
  x 执行权限
  ls -l 1.sh 查看权限
- 运行方式
  bash 1.sh   用bash运行
  ./1.sh  使用默认
  source  ./1.sh
  .filename.sh
- 2.sh   https://blog.51cto.com/3653220/2361450
