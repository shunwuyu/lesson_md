https://codesandbox.io/s/lucid-darkness-2xcfv?file=/src/Post.js:288-317


- 如何获得？
    http://127.0.0.1:8001/01-hash.html?a=100&b=20#/aaa/bbb
    location.protocal // 'http:'
localtion.hostname // '127.0.0.1'
location.host // '127.0.0.1:8001'
location.port //8001
location.pathname //'01-hash.html'
location.serach // '?a=100&b=20'
location.hash // '#/aaa/bbb'

- hash变化会触发网页跳转，即浏览器的前进和后退。
    name  href="#ccc"
    可以前后
- hash 可以改变 url ，但是不会触发页面重新加载
- 这并不算是一次 http 请求
- hash 通过 window.onhashchange 的方式，来监听 hash 的改变


- history API 是 H5 提供的新特性，允许开发者直接更改前端路由
    