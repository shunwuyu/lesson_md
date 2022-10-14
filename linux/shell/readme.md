[source](https://time.geekbang.org/course/detail/193-116337)

- shell 脚本编程
  linux 命令， 组合在一起， 构成shell脚本
  变量， 数据灵时存储， 不一定顺序执行， 判断和分支， 循环。 特殊字符. 
  linux 命令解释器， 
  ls  接受这条命令， -》文件系统， 扇区 -》 内核 -》 shell
- 启动过程
  BIOS-MBR（硬盘）-BootLoader(grub 启动|选择内核工具)-kernel（内核）-systemd(1号进程)-系统初始化-shell
- UNIX的哲学： 一条命令只做一件事
  进入目录， 查看内容
  cd  ls 






-  docker 安装vim 
  yum -y install vim*
  有读的权限， 没有执行权限 chmod  u+x 1.sh
  bash 1.sh
  如果不是bash  非注释
   