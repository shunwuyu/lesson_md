[source](https://webpack.docschina.org/guides/getting-started/)

1. npx webpack
    - npx是npm5.2之后发布的一个命令
    - 让项目内部安装的模块用起来更方便

2. async和defer都是script标签的属性，用于在不阻塞页面文档解析的前提下，控制脚本的下载和执行。
    defer作用：用于开启新的线程下载脚本文件，并使脚本在文档解析完成后执行。
    async作用：用于异步下载脚本文件，下载完成之后立即解释执行代码。