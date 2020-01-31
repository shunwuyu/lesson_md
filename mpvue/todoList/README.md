# todo-list

> A Mpvue project

## Build Setup

``` bash
# 初始化项目
vue init mpvue/mpvue-quickstart myproject
cd myproject

# 安装依赖
yarn

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

小程序自定义的wxml和wxss和自己定义的语法
html css 很像，
被三大框架统治的前端江湖头疼不易，
需要专门为小程序开发一套代码来维护，也徒增了学习成本，

能不能 写好 vue react 直接生成小程序。

## miniprogramRoot 指定小程序根目录
