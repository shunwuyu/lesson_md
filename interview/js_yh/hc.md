## 如何对JavaScript的缓存进行优化？

Cookie 
  - 通常由浏览器存储， 然后将Cookie 与每个后续请求一起发送到服务器。 
  服务器发送带有Cookie 的header头， Cookie 设置有效时间。
  - 应用于
    - 会话管理  登录， 购物车，  游戏的分， 
    - 个性化 用户首选项， 主题和其他设置
    - 跟踪  记录和分析用户行为， 比如埋点
      https://juejin.im/post/5c178aaaf265da6147702108
      热力图  流失率  数据可视化

  https://m.jd.com/   TRackID

sessionStorage
  - 创建一个本地存储的键值对
  - 页面之间的传值
  关闭后就没了  localStorage 区别
  localStorage cookie 区别

indexedDB
  索引数据库
  - 客户端存储大量结构化数据
  - 没有网络连接的情况下使用 PWA的前提 客户端  
    地铁前download
  - 将冗余， 很少修改， 但经常访问的数据， 以避免随时从服务器取数据
  https://docs.qq.com/desktop   浏览器mongodb

localStorage
  - 本地存储
  - 应用于
    - 缓存静态文件内容， JS/CSS   不用重复加载
    - 缓存不常变更的API接口数据 每天/没 半天
    - 缓存地理位置信息  北京
    - 浏览在页面的具体位置  阅读小说 

    http://m.baidu.com/   css 样式   js   首次加载， 不用再请求   style  script 标签  
    更新策略 md5值 @   wifi 一致
