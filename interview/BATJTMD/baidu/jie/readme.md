- 把一个一维数组变成三个三个的二维数组
    1.js
- 两种思路实现反转链表
    2.js
    - 迭代法
    - 递归法
    3.js
    方法	时间复杂度	空间复杂度	是否原地反转
    迭代法	O(n)	O(1)	是
    递归法	O(n)	O(n)	否
    迭代法是原地反转的，它只需要常数级别的额外空间；而递归法需要使用系统栈来存储函数调用的上下文，因此空间复杂度是 O(n)

- 设计一个lru 缓存结构
    4.js
- 给定一些目录路径， 聚合成树形结构
    5.js

- 项目的难点
    1. 前端页面渲染性能优化
        - 搜索页面搜索建议 特别慢，  长列表页 返回到首页 特别慢
            使用 lodash  节流  
        - 列表图片多时  非常慢， vue-lazyload延迟加载图片
        -   每次来回切换时， 首页重新加载慢
            keep-alive缓存组件   
    2. 接口设计和调试
        - 最开始， 接口数据比较麻烦， 通过看网络请求  伪造
        - 后面迁移到 node 搭建路由  返回数据
        - 最有用了 mockjs  拦截， 并返回随机数据  
    3. 我使用了TypeScript来编写代码，但对于TypeScript类型体系的理解和应用还有很多需要学习的地方。我遇到的一个挑战是如何正确地定义类型，并且遵循最佳实践，以确保整个代码库都能够受益于TypeScript的好处。为了解决这个问题，我仔细研究了TypeScript文档，阅读了相关的文章和教程，并参考了一些开源项目的例子
        vue 在各个流程  ts 的基本写法
        - ref  reactive   
        - props
        - api
        - vuex 
        - router 
    4. 中间件的理解
        login
            checkBody -> doLogin -> token 生成 
            洋葱模型
    5. 复杂的vuex 
        实现复杂的状态管理：Vuex 可以用于管理全局和局部组件状态
        实现持久化存储：在某些情况下，需要将 Vuex 状态持久化到本地存储或后端服务器
        实现异步操作：Vuex 可以处理异步操作，例如从 API 获取数据并更新状态。
        dispatch -> commit 
    6.  hooks 
        vueuse  加速开发
        @vueuse/head    
        可以使用该对象的各种方法（例如 title, meta, link, base 等）来动态地添加、修改或删除相应的标记
-    https://github.com/nurRiyad/hacker-news/blob/main/src/stores/news.ts

- 项目中的性能优化
    https://github.com/shunwuyu/lesson_md/tree/master/interview/vue/all

- 手写eventBus 

    class EventBus {
  constructor() {
    this.events = {};
  }

  // 订阅事件
  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  // 发布事件
  publish(eventName, ...args) {
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName].forEach(callback => callback(...args));
  }

  // 取消订阅
  unsubscribe(eventName, callback) {
    if (!this.events[eventName]) {
      return;
    }
    const index = this.events[eventName].indexOf(callback);
    if (index > -1) {
      this.events[eventName].splice(index, 1);
    }
  }
}

- https://github.com/shunwuyu/lesson_md/blob/57f5f22cf5032d05e3e8ef2b54224a80374bf444/interview/BATJTMD/didi/emit/1.js#L21
    eventEmitter 
    一天只能弹出一个弹窗，如何实现
    可以使用 Node.js 的定时任务模块 node-schedule 来实现每天运行一个脚本。这个模块提供了一系列强大的调度功能，可以让你按照特定的时间安排任务的执行。

下面是一个使用 node-schedule 模块的示例：

首先，在命令行中进入项目根目录，使用以下命令安装 node-schedule 模块：
npm install node-schedule
然后，在需要执行的脚本文件中引入 node-schedule 模块，并创建一个调度器对象。
javascript
const schedule = require('node-schedule');

const job = schedule.scheduleJob('0 0 * * *', function() {
  // 在这里编写需要执行的脚本代码
});

- 斐波那契额 O(n)

    function fibonacci(n) {
  if (n <= 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }

  const fibs = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibs[i] = fibs[i - 1] + fibs[i - 2];
  }

  return fibs[n];
}

- 执行顺序
    6.js

- this 区别
    const obj1 = {
  fn: () => {
​    return this
  }
}
const obj2 = {
  fn: function(){
​    return this
  }
}

console.log(obj1.fn());
console.log(obj2.fn());

- 如何判断两个对象相等
    