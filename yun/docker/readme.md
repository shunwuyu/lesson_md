# centos 安装 docker 
docker 依赖 yum install -y yum-utils device-mapper-persistent-data lvm2

docker 添加到yum repo  yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

安装 docker 
yum install -y docker-ce

docker -v   测试docker 安装成功
service docker start     启动docker 

docker 镜像加入腾讯云 更快
echo "OPTIONS='--registry-mirror=https://mirror.ccs.tencentyun.com'" >> /etc/sysconfig/docker

service docker restart  重启

docker pull mysql
