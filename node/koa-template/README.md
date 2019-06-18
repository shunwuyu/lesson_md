## ejs
<%= %> 输出数据到模板（输出是转义 HTML 标签） html 不再是原来的意思
<%- %> 输出非转义的数据到模板 html 原来的意思
include 包含 引入其他的模块

## koa 
app.use(function)
ctx
## middleWare
await 等待 下一个中间件执行完毕
下一个中间件执行完毕执行完毕后 
讲控制权交还给当前中间件

## response header
自定义 通常以 x 开头

## process
process对象是全局变量，它提供当前node.js的有关信息.
env自然是它的一个属性，这个属性返回包含用户环境信息的对象
NODE_ENV不是process.env对象上原有的属性，它是我们自己添加上去的一个环境变量。

`linux` NODE_ENV=production node build.js。
`windows` set NODE_ENV=production node build.js
npm install --save-dev cross-env
cross-env NODE_ENV=production node build.js