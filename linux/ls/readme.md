# ls
https://www.linuxprobe.com/linux-directory.html
ls /
接受路径参数， 不用跳转， 就可以输出相关信息
ls -l /  更详细
bin binary 的缩写,这个目录是对Unix系统习惯的沿袭,存放着使用者最经常使用的命令。如:ls,cp,cat等
/dev  device的缩写.这个目录下是任何Linux的外部设备,其功能类似Dos下的.sys和Win下的.vxd。在Linux中设备和文档是用同种方法访问的。例如:/dev/hda代表第一个物理IDE硬盘。
/etc 这个目录用来存放任何的系统管理所需要的配置文档和子目录
./host 文件  www.taobao.com  ->  localhost
/usr 很多应用程序放在这个目录 有点和完成目录象
/tmp  临时文件 

- ls -a   .git 
    -l    所有文件详细信息
    -t    修改事件排序
    -c   ctime 排序

d:第一位表示文件类型。d是目录文件，l是链接文件，-是普通文件，p是管道  
rwx:第2-4位表示这个文件的属主拥有的权限，r是读，w是写，x是执行。
r-x:第5-7位表示和这个文件属主所在同一个组的用户所具有的权限。
r-x:第8-10位表示其他用户所具有的权限。