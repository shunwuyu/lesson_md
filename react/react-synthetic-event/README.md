## react 自己实现了一套事件系统
1. 把事件监听挂载在 document 上面，
2. 自己模拟了一套捕获 冒泡的流程

## 和原生事件有什么区别
1. 观察开发者工具


## why
性能
1. React作为一套View层面的框架, 通过渲染得到vDOM，再由diff算法决定DOM树那些结点需要新增、替换或修改,
   假如直接在DOM结点插入原生事件监听，则会导致频繁的调用addEventListener和removeEventListener，造成性能的浪费,所以React采用了事件代理的方法，对于大部分事件1而言都在document上做监听
2. 批量更新
   （最普遍的setState）React都会将中间过程保存起来，当作一步处理
   ```js
   ele.style.color='red'; 
   ele.style.color='blue';
   ele.style.color='red';
   ```
复用
1. React看到在不同的浏览器和平台上，用户界面上的事件其实非常相似，例如普通的click，change等等。React希望通过封装一层事件系统，将不同平台的原生事件都封装成 SyntheticEvent
2. 对于不同的浏览器而言，React帮我们统一了事件，做了浏览器的兼容
