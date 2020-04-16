https://github.com/luwuer/webpack-project-training-docs/blob/master/3.%20%E5%A4%84%E7%90%86%E5%9B%BE%E7%89%87%E3%80%81%E6%A0%B7%E5%BC%8F%E5%92%8C%E5%AD%97%E4%BD%93/demo/package.json

- 可以用 Loaders 打包任何 Javascript 之外的任何静态资源
- css-loader style-loader 
  css-loader 的作用是处理css中的 @import 和 url 这样的外部资源  处理css文件
  style-loader 作用是把样式插入到 DOM中，方法是在head中插入一个style标签，并把样式写入到这个标签的 innerHTML里
  看下头部的style 标签
- html-webpack-pluign   
- main.css    图片   
  在内存中 
  dlam.jpg 都被打包了， 设置下
  limit: 10240  10K   file-loader  加载图片 文件
  esModule: false
  file-loader 版本问题
- stylus 文件  
  minicss   reloadAll  main.css
  