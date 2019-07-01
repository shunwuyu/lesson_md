## 线上地址
[preview](http://music.codemcx.work/recommend)

## rewire
[rewire 测试用的一个模块](https://blog.fundebug.com/2017/12/27/npm-rewire-tutorial/);

## stylus
1. npm install stylus stylus-loader --save-dev
2. rule
   ```js
   {
      test: /\.styl$/,
      use: ["style-loader", "css-loader", "stylus-loader"]
    }
    ```
## lazy-load
问题： 当滚动专辑列表的时候，从屏幕外进入屏幕内的图没有了
这是因为react-lazylaod库监听的是浏览器原生的scroll和resize事件，当出现在屏幕的时候才会加载。而这里使用的是better-scroll的滚动，better-scroll是基于css3的transform实现的，所以当图片出现在屏幕内时自然无法被加载

## react-redux
react-redux库包含了容器组件和展示组件相分离的开发思想，
在最顶层组件使用redux，其余内部组件仅仅用来展示，所有数据通过props传入
说明	容器组件	展示组件
读取数据	从 Redux 获取 state	从 props 获取数据
修改数据	向 Redux 派发 actions	从 props 调用回调函数
