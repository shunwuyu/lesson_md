- 安装 docker
    sudo yum update
    安装 Docker 的依赖项：

    sudo yum install -y yum-utils device-mapper-persistent-data lvm2
    添加 Docker 的稳定版仓库：

    sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo
    安装 Docker：

    sudo yum install docker-ce
    启动 Docker 服务并设置开机自启：

    sudo systemctl start docker
    sudo systemctl enable docker

- 