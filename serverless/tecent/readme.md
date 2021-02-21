https://cloud.tencent.com/product/sls

[如何安装Serverless Framework](https://cloud.tencent.com/edu/learning/course-1889-22491)

## 如何安装Serverless Framework 
npm i -g serverless

serverless -v

1. 创建文件夹 my_website
  code/index.html 
  serverless.yml  结构

  ```
  myWebsite:
  component: "@serverless/tencent-website"
  inputs:
    code:
      src: ./code
      index: index.html
      error: index.html
    region: ap-guangzhou
    bucketName: my-bucket
  ```
  serverless --debug
  url 

2. express
  2.1. my_express_test
    serverless.yaml
  2.2. npm init -y
    npm i --save express
    app.js   代码

3. 全栈网站的部署
  https://cloud.tencent.com/document/product/1154/43009

## 1.1 通过插件创造一个项目
serverless create --template tencent-nodejs --path my-service

serverless deploy   扫码

网页 扫码登陆

云产品  -》 管理与审计 -》 访问密匙 -》 新建

## Serverless Framework 插件的基础使用方法

serverless invoke -h
-f function name 
serverless invoke hello_world 完成了调用

修改并重新部署
index.js   my node project 
serverless deploy
serverless invoke -f hello_world   在云端了

查看函数的相关信息
serverless info
serverless metrics  调用次数 

## 腾讯云-scf 基本使用方法

  plugin  客户端工具  本地进行相关的项目创建、部署、调用、日志查看， 这一切的内容都在使用腾讯
  云云函数的相关服务, 
  components 将腾讯云很多的功能进行一个组合， 

  一键部署一个静态网站， 部署一个后端框架服务等。 
  mkdir  mytest_scf

  code/index.js 加内容
  serverless.yaml 配置文件
  ```
    myFunction2:
  component: "@serverless/tencent-scf"
  inputs:
    name: myFunction2
    codeUri: ./code
  ```
  serverless --debug
  函数服务 并且会上传

## 腾讯云-API Gateway 基本使用方法

## 静态网站的开发部署

## express
  1. my_express_test
    serverless.yaml
  2. npm init -y
    npm i --save express
    app.js   代码

## 全栈网站的部署

前端 vue  
后端express

serverless create --template-url https://github.com/yugasun/tencent-serverless-demo/tree/master/fullstack-application-vue

https://cloud.tencent.com/document/product/1154/43009 全栈