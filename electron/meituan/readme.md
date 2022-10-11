https://time.geekbang.org/course/detail/100044201-187016
1. 为什么navigator.userAgent 中含有mozilla呢 https://blog.csdn.net/wangchaoxiaoban/article/details/78456808
  frame  于是网站管理员探测user agent，对Mozilla浏览器发送含有框架的页面，对非Mozilla浏览器发送没有框架的页面。 它选择宣布IE是兼容Mozilla，并且模仿Netscape称IE为“Mozilla/1.22
2. npx 用法

- 由Github 开发的开源框架
- Web 技术构建跨平台桌面应用

Electron= Chromium(UI能力 统一) + Node.js(底层操作能力 文件读取/c++ npm) + NativeAPI(跨平台)

窗口 托盘 其次是系统能力 Notification 软件更新， 

Electron 历史 

1989 伯纳斯李
1990 Nexus   不能显示图片    HTTP 0.9 
1993 NSCA  看到图片Mosaic 马赛克
1994 网景 Mozilla Netscape 
userAgent Mozilla 服务器都会去检测mozilla

布兰登 艾奇   十天开发了 javascript
1995 IE

Mozilla 开发调试工具 火狐
  2002
  2008 基于firfox Chrome 极致的简洁 多进程带来的稳定 10倍提速的V8引擎
     chromium  开源
  2009 
    Ryan Dahl  基于 V8 将非阻塞IO 和JS整合 JS 衍生到服务端里

  做桌面端
  2011 英特尔工程师王文睿 node-webkit  
  2012 NW 实习生  Github C++ 前五
  electron 赵成
  2012 github  atom 项目组  NW 
  2013 Atom shell
  2015 Electron

  快速试错， 快速占领市场时 一天

  效率应用， 开发者工具 

  同时开发Web版和桌面端 复用大量代码的可能性
  VSCode  Atom Slack  Whatsapp  WordPress 大象

解决业务需求  
造工具  全面  

- MVP 
  electron .

Electron 架构和原理
多进程架构 chromium 和 node.js

Chromium 浏览器  桌面应用

IPC 进程间通信
1. chrome 多进程架构
  Browser 和多个Render 
2. 进程间需要IPC通信


远程控制到我们的架构

- 目录架构   src  pages
- npx create-react-app main --use-npm
  npx 的原理很简单，就是运行的时候，会到node_modules/.bin路径和环境变量$PATH里面，检查命令是否存在。
  上面代码运行时，npx 将create-react-app下载到一个临时目录，使用以后再删除。所以，以后再次执行上面的命令，会重新下载create-react-app。
  指定版本

npm i electron-is-dev --save

npm i customize-cra react-app-rewired