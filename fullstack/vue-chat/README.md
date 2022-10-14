# vue-chat    

## 目前将一直重点更新维护react版本的，此版本注重性能和代码质量，完成度更高，更用心地去写，有兴趣的同学请移步 -> [react版本](https://github.com/aermin/react-chat)


## 线上地址

[点击加入线上聊天](https://im.aermin.top)

欢迎加入 "ghChat项目交流群" 这个群交流呀，可搜索群名(不用全打)加入，也可点击机器人的邀请加入(如下图)

![image](https://user-images.githubusercontent.com/24861316/53296199-6337a200-3845-11e9-8435-3f5480cca602.png)


### 介绍

这是我的毕设项目，产品功能和页面参照qq，微信，TIM，不完全一样，有些是自己的想法。前后端都自己写。
感觉是一个挺不错的全栈入门项目，各种交互各种业务逻辑，不花哨，但实用。

对node（koa）和vue学习会挺有帮助，现在开源出来，接下去将继续不断完善😄欢迎star

### 技术栈：

前端vue，vue-router,vuex ，vue-cli和axios，scss,用rem做了移动端适配，没有用第三方组件。
后端用koa2，用gulp构建工具实现自动刷新后端代码运行。
数据库用mysql，基于Token的jwt鉴权机制，用socket.io做双向通信；

 
![群聊](https://user-gold-cdn.xitu.io/2018/3/1/161e03584988b916?w=326&h=251&f=jpeg&s=32371)

### 项目展示 

- 系统组成

![image](https://user-images.githubusercontent.com/24861316/41090200-47c9c28e-6a76-11e8-8147-f9f771b3d70d.png)


![image](https://pic3.zhimg.com/v2-e910ab47a384372da02ebeb1e9394f6e_b.gif)
![image](https://pic3.zhimg.com/v2-555e1045f4e55b0877b65be1e3832242_b.gif)
![image](https://pic2.zhimg.com/v2-a2b249f27021fc0db4f7ee87950e2601_b.gif)

![image](https://user-images.githubusercontent.com/24861316/41090733-8bc710d0-6a77-11e8-94b9-9d6d698ed162.png)


![image](https://user-images.githubusercontent.com/24861316/41091157-834856ac-6a78-11e8-923e-31fdaae84a01.png)

### todo

> 2018.01.13  开始

- [x] 登录
- [x] 注册
- [x] 登出
- [x] 弹窗，提示等组件
- [x] 机器人智能聊天回复
- [x] 私聊
- [x] 群聊

> 2018.02.01

- [x] 用户资料卡
- [x] 加好友及验证好友请求
- [x] 好友请求通知
- [x] 删除好友
- [x] 未读消息提示

> 2018.02.10  吐槽一下，不得不佩服qq，微信的用户体验，功能细节挺多。。。。。

- [x] 搜索用户，群组
- [x] 创建群
- [x] 群资料卡
- [x] 加群
- [x] 退群
- [x] 修改备注

> 2018.02.11 

- [x] 发布到线上
- [x] 修改个人信息  
 
> 2018.03.02

- [x] 收到添加好友请求底部tab红点提醒

> 2018.03.20  收拾掉不少bug :-)  

- [x] 迁移成Electron桌面版本的，支持mac和win环境。 ~~（Electron版本将于答辩完开源）~~

已开源：[Electron桌面版本项目地址](https://github.com/aermin/electron-vue-chat)

> 2018.03.25 

- [ ] 通讯录展示
- [ ] 聊天发表情
- [ ] 聊天发图片
- [ ] 支持聊天代码美化，md语法
- [ ] 用户上传头像
- [ ] 性能优化，redis做缓存
- [x] 实现react版本的

### 下载到本地开发环境跑

本次开发我用了三个git分支，分别是主分支master ，开发分支dev ， 线上分支online，如果你要fork到你的本地跑，请fork master分支 。

（注意下到本地后如果要体验soket.io通信互聊，用两个浏览器各打开一个账号，不能用同一个浏览器，因为我用localstorage缓存账户信息）

Fork 或者 下载本项目

然后进入本项目的文件夹，把vue-chat/server/init/sql 的 airchat.sql文件 拉到你的msyql客户端 run一下生成数据库(我使用的是mac下的 `Sequel Pro` 挺好用的，当然你用其他方式也可生成数据库也可)

```js
npm i
```
```js
npm run dev
```
```js
cd server 
```
```js
npm i
```
接着下面两条命令执行一条就行，看着选；（如果想要修改后端代码即时保存刷新，用第一条；如果像想用chrome进行debug调试，用第二条)

```js
npm run start  
```
```js
npm run dev
```

### 打包上线，让所有人都能用到你的产品(非必须)

打包上线前需要对master分支的代码做一些修改。具体怎么修改以及后续如何打包上线，请看我单独写的一篇文章[vue-chat 打包上线小记](https://github.com/aermin/blog/issues/28)，希望对你有帮助。

> 老习惯，代码注释比较详细，需要注释而没有注释的我也尽快补上;
后面也会写几篇博客来详细介绍本项目，希望更好的帮助到入门的小伙伴(大神请略过，或者给些指导建议😄)

##### 如果对您有帮助，希望给个star，鼓励我继续更新^ ^

### 开发目录

```
├── LICENSE
├── README.md
├── build
│   ├── build.js
│   ├── check-versions.js
│   ├── logo.png
│   ├── utils.js
│   ├── vue-loader.conf.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   └── webpack.prod.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   └── prod.env.js
├── dist  //打包后的静态资源
│   ├── index.html
│   └── static
├── index.html
├── package-lock.json
├── package.json
├── server  // 后端代码
│   ├── config.js
│   ├── controllers
│   ├── gulpfile.js
│   ├── index.js 
│   ├── init  //数据库初始化(sql文件也在这)
│   ├── middlewares 
│   ├── models
│   ├── package-lock.json
│   ├── package.json
│   ├── routes
│   └── utils 
├── src  //前端代码
│   ├── App.vue
│   ├── assets
│   ├── components
│   ├── main.js
│   ├── pages
│   ├── router
│   ├── store //vuex在这
│   └── utils
└── static
```

### 材料

#### 自己总结的 

[web移动端适配方案](https://github.com/aermin/blog/issues/8)

[vue-chat 打包上线小记](https://github.com/aermin/blog/issues/28)

[token，Json web token（jwt）](https://github.com/aermin/blog/issues/24)

[web移动端页面怎么调试](https://github.com/aermin/blog/issues/9)

[本地mysql客户端连接centos的数据库](https://github.com/aermin/blog/issues/7)

文章都在[我的博客](https://github.com/aermin/blog)上，欢迎star我的博客😄

#### 第三方的(在此感谢) 

[socket.io英文文档](https://socket.io/docs/server-api/)

[socket.io中文文档](https://zhuanlan.zhihu.com/p/29148869)

[socket.io  in github](https://github.com/socketio/socket.io/)

[socket.io-client in github](https://github.com/socketio/socket.io-client)

[聊天机器人api](http://www.tuling123.com/)

###  License

[MIT](http://opensource.org/licenses/MIT)

