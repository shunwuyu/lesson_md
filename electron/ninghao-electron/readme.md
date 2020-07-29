打开终端，进入到想要保存 Electron 项目的地方 .. 新建一个目录 .. 比如 ninghao-electron .. 再进入到这个项目目录的下面 .. 在里面新建一个 package.json 文件 .. 执行一下 npm init -y ..

有了这个文件以后，可以再安装一下 electron .. npm install 安装的是 electron .. --save-dev ... 把它保存在项目的开发依赖里面 ..

安装完成以后，再用编辑器打开这个项目 .. 这里我用的是 VSCode 编辑器 .. 这款编辑器软件也是基于 Electron 创建的 ..

先打开项目的 package.json .. 这个 main .. 设置的是应用的入口文件 .. 现在这个文件是 index.js .. 可以改个名字 .. 换成 main.js ..

在项目下面可以新建一个这样的文件 .. 名字是 main.js ..

然后在 package.json 的 scripts 里面，添加一个命令 .. 名字是 start .. 执行的是 electron . 这个 . 表示当前目录 ..

运行应用的时候，可以在终端上，项目当前目录下执行一下 npm run start .. 或者直接执行 npm start ..

这个命令会启动 electron 应用 .. 不过现在应该还没有窗口 .. 只有一个默认的应用菜单 ..

先在项目里面添加一个 .gitignore 文件 .. 里面是源代码控制要忽略掉的东西 .. 添加一个 node_modules .. 还有一个 .DS_Store ..

然后回到终端 .. git init .. 初始化一个项目仓库 .. 再做一次提交 .. git add . git commit -m 'init' ..

在 github 上面给项目再去创建一个远程仓库 .. 新建一个仓库 .. 输入仓库的名字 .. ninghao-electron .. 项目是公开的 .. 再按一下 创建仓库 ..

复制这行添加远程仓库的命令 .. 回到终端 .. 在项目下面执行一下 .. 然后再把项目的 master 分支 .. 推送到 origin 这个远程上 ..

回到远程仓库页面 .. 刷新一下 .. 这里你会发现刚刚推送上来的项目的 master 分支上的东西 ..

打开项目的 main.js 这个入口文件 .. electron 提供的所有功能都在 electron 这个模块里面 .. 先导入 electron 模块 .. 这里我们可以使用解构的方法从 electron 模块里直接把一些东西拿出来 .. 比如先把 app .. 还有 BrowserWindow 拿出来用一下 ..

app 是管理应用程序生命周期用的， BrowserWindow 是创建还有控制应用窗口用的 ..

app 里面有些事件，我们先监听一下 ready 这个事件 .. Electron 初始化以后会触发执行这个事件，在这个时候我们可以去创建应用的窗口 .. app.on .. 监听的是 ready 事件 .. 用 createWindow 方法来处理这个事件 ..

窗口

上面定义一个函数 .. 名字是 createWindow .. 在函数里面可以新建一个窗口 .. 在全局先添加一个 win，表示 window ，添加这个全局变量是为了不让 javascript 把我们要创建的窗口做垃圾回收 ..

在这个函数里面，设置一下 win .. 新建一个 BrowserWindow ..

BrowserWindow 实例上面有些方法 .. 先用一下它上面的 loadURL .. 窗口地址可以是一个文件类型的地址 .. 也可以是 http 或者 https 类型的地址 .. 这里暂时我们先载入宁皓网的首页 .. https://ninghao.net ..

运行

运行 electron 应用，可以在终端上，执行一下 npm start .. 这次打开的这个 electron 应用上面显示的东西是宁皓网的首页

创建窗口的时候可以添加一些选项，比如窗口的尺寸，位置，背景颜色等等 .. 选项是一个对象 .. 里面先用 width 设置一下窗口的宽度 .. 值是 960 .. 再添加一个 height .. 它是窗口的高度 .. 值是 600 ..

再添加一个 minWidth 设置一下最小宽度 .. 830 .. .再用一个 minHeight 设置一下最小高度 .. 大小是 500 ...

backgroundColor 可以设置窗口的背景颜色 .. 暂时设置成一个浅灰色 #f8f8f8 ..

回到终端 .. 停止运行应用 .. 然后重新再运行一下 .. 现在这个应用的窗口就是我们设置的尺寸 .. 宽是 960，高是 600 ... 窗口最小的宽度是 830 .. 最小高度是 500 ..

应用的界面可以使用 html，css 这些东西来创建 .. 在项目的下面新建一个 html 文档 .. 名字是 main.html ... 文档里面添加一个基本的结构 .. 设置一下文档的标题 .. Ninghao .. 文档的主体部分 .. 用一个大标题 ... 包装的文字是 hello ..

下面我们可以让这个 html 文档作为桌面应用的一个窗口 .. 打开 main.js .. 先导入两个 node 自带的模块 .. 一个是 url .. require url .. 还有一个是 path .. . require 一下这个模块 ..

在 createWindow 这个方法里面我们新建了一个 BrowserWindow .. 用了一下它的 loadURL .. 我们可以给这个方法提供一个 http 类型的地址 .. 也可以是一个 file 类型的地址 .. 就是本地文件 .. 用一下 url.format .. 一个对象 .. 用这个方法组织生成一个要 file 类型的地址 .. protocol ，协议是 file .. 然后把 slashes 设置成 true ... 最后是 pathname .. 它的值应该就是窗口要用的 html 文档的地址 .. 用一下 path.join .. __dirname 表示当前文档所在的目录 .. 再加上一个 main.html ..

回到终端 .. 重新再运行一下我们的应用 ...

现在应用的主窗口上面会显示一个大标题 .. 标题文字是 hello ... 现在这个窗口界面用的就是 main.html 这个文档 ..

每次修改了应用里的东西，想要看到修改之后的结果必须重新运行一下应用，就是先停止，然后再运行一次 .. electron-reload 这个工具可以帮我们自动重载应用，这样就可以立即看到修改之后的结果了 ..

在终端上先给项目安装一下这个包 .. npm install 安装的是 electron-reload .. --save-dev .. 把它保存在项目的开发依赖里面 ..

装好以后，打开 main.js .. 在文档的顶部先导入这个 electron-reload ... 接着再配置一下它监视的东西 .. 比如 __dirname ... 意思就是如果当前文件所在目录里面的文件有变化，就会刷新应用窗口里的内容 ..

想要硬重置，hard reset .. 就是打开一个新的 electron 进程 .. 可以再添加一个选项对象 .. 里面设置一下 electron .. 它的值可以 electron 可执行文件所在的位置 .

path.join(__dirname, 'node_modules', '.bin', 'electron') .. 在文件的顶部可以再导入这里用的这个 path 模块 .. const path 等于 require .. path ..

下面可以再试一下 .. 打开 main.html .. 修改一下这个大标题的文字 .. 保存一下文件 ..

回到应用预览一下 .. 现在不需要我们手工重启应用，可以立即看到修改之后的结果 ..

devtron 可以帮我们检查，监视还有调试 electron 应用 .. 它是一个开发者工具的扩展 .. 先把它安装在项目里面 .. npm install devtron --save-dev，把它保存在项目的开发依赖里面 ..

完成以后再去安装一下它 .. 我们可以直接在应用的开发者工具里面去安装一下 ..

在应用的 View 菜单里面，有个 Toggle Developer Tools .. 打开开发者工具 .. 用它我们可以调试应用 ..

先打开 Console 选项卡 .. 执行一下 require('devtron').install()

完成以后 .. 在开发者工具上面，会多出一个 devtron 选项卡 .. 在上面可以查看 Require Graph .. Event Listeners .. 还有 IPC 等等 ..

先打开这个 Event Listeners .. 事件监听器 .. Load Listeners ..

electron.remote.app .. 找到 ready 事件 .. 这个监听器是我们之前在应用的 main.js 里面添加的 ..

在这个创建窗口函数里面 .. 可以监听一下窗口的 closed 事件 .. 关闭窗口的时候会触发这个事件 .. 发生这个事件以后，可以让 win 等于 null .. 因为关掉窗口以后 .. 这个窗口对象就不再需要了 ..

下面可以先随便打开 macOS 系统上的一个应用 .. 比如 safari .. 关闭打开的窗口 .. 虽然窗口都关闭了，但是 safari 并没有完全关闭 .. 除非用户按了 command + Q 这个快捷键 .. 应用才会完全退出 ..

重新再打开 safari .. 关掉窗口 ... 再按一下 safari 图标 .. 又会打开一个 safari 窗口 ..

window-all-closed

再试一下我们的 electron 应用 .. 关掉应用的窗口 .. 现在关掉应用的所有窗口以后 .. 应用也会关闭 .. 重新再运行一下 .. 打开开发者工具 .. devtron .. Event Listeners ..

在 electron.remote.app 里面，找到 window-all-closed 这个事件 .. 现在它有一个监听器 .. 如果 window-all-closed 这个事件只有一个监听器 .. 发生这个事件以后，会执行 app 的 quit 这个方法 .. 所以会退出应用 ..

在 main.js 里面 .. 再监听一下 app 的 window-all-closed 事件 .. 发生这个事件以后我们可以判断一下用户的操作系统 .. 看看 process.platform 是不是不等于 darwin .. 也就是 macOS 系统 ..

如果不是 macOS 系统 .. 执行一下 app.quit() .. 退出应用 .. 如果是的话 .. 就不会退出应用 .. 一般这是 macOS 系统上的软件的一个默认的行为 ..

activate

下面再监听一下应用的 activate 事件 .. 第一次打开应用，应用已经运行要重新打开应用，点击程序坞或者任务栏都会触发这个事件 ..

判断一下 win 是不是等于 null .. 如果是的话，发生 activate 事件可以执行一下 createWindow ..

重新运行一下应用 ..

关掉应用的窗口 .. 这次应用并没有退出 .. 你会看到它的菜单仍然会在这里显示 .. 按一下应用图标 .. 触发 activate 事件 .. 会重新创建一个应用窗口 ..

在应用的渲染器进程里面 .. 就是应用的窗口，其实就是网页 .. 可以使用 ipcRenderer 给应用的主进程发消息 .. 在主进程上可以使用 ipcMain 处理渲染器发过来的消息 .. ipc 指的是 inter-process communication .. 就是内部进程通信的意思 ..

先打开应用的一个窗口 ... main.html .. 在这个网页里面添加一组 script 标签 .. 里面可以写点脚本代码 .. 先从 electron 模块里面把 ipcRenderer 拿出来用一下 ..

下面用一下 ipcRenderer 上面的 send 这个方法去给主进程发送一个消息 .. 消息需要一个频道，这个频道都是我们自己定义的 .. 比如 greet .. 表示问候 .. 第二个参数是带的消息 .. 可以是一个对象 .. 里面添加一个 message .. 它的值是 hello main ~

打开 main.js .. 在主进程上，可以把 ipcMain 从 electron 模块里面拿出来 ..

然后可以监听一下 greet 频道上的消息 .. ipcMain .. 用一下 on .. 监听的是 greet 这个频道 .. 一个回调 .. 里面有 event 参数 .. 还有一个 args 参数 .. 这个 args 是消息内容 ..

在方法里面，可以先在控制台上输出 args 里的东西 ..

这里我们在编辑器集成的终端上面运行一下应用 .. 运行以后渲染器那里会用 ipcRenderer 在 greet 这个频道上给主进程发一个消息 .. 主进程监听了这个频道，有消息的话它就会把消息内容输出到控制台上 .. 所以在这里，你会看到输出的这个消息对象 .. 它里面有个 message 属性，值是 hello main ~

在主进程的监听器这里，可以直接回一条消息 .. 用一下 event ， sender 上的 send 方法 .. 往 greet 这个频道上发个消息 .. 消息的值是一个对象 .. 里面有个 message 属性 .. 值是 hi renderer ~

再回到 main.html .. 用一下 ipcRenderer 上的 on .. 监听一下 greet 这个频道 .. 一个监听器方法 .. 里面有个 event 参数 .. 还有一个 args 参数 ..

方法做的事情是在控制台上 .. 输出 args 里面的值 ..

重新再运行一下应用 .. 主进程收到了 greet 频道上的消息 .. 打开应用窗口 .. 开发者工具 .. Console .. 在渲染器这边儿 .. 也监听了 greet 频道，有消息过来就会把它输出到控制台上 .. 所以这里你会发现从主进程那里发送过来的这条消息内容 ..