[source](http://www.ruanyifeng.com/blog/2016/01/babel.html)

```JS
// 转码前
input.map(item => item + 1);

// 转码后
input.map(function (item) {
  return item + 1;
})
```

.\node_modules\.bin\babel  example.js

.\node_modules\.bin\babel  example.js -o compiled.js  

.\node_modules\.bin\babel  .\src\ --out-dir lib

没有转 set   babel-plugin-transform-runtime
babel-core import 'babel-polyfill'; OK
