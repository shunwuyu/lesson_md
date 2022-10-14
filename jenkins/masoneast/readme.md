[source](https://juejin.im/post/5e1c113b5188254baf6c4048)

开发完成后的持续集成CI/CD。
向github 仓库push 代码后， 实现自动打包， 并部署到对应服务上
jenkins + docker 装x

自动化任务的速度和一致性

1. docker run --rm  -u root -p 8080:8080  -v jenkins-data:/var/jenkins_home jenkinsci/blueocean
2. localhost:8080  
3. docker exec -it 容器id
4. /var/jenkins_home/secrets/initialAdminPassword
5. 
