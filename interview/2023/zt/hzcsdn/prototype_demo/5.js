function Person(name) {
    this.name = name
    // return this // 其实这行可以不写，默认返回 this 对象
  }
  
  var nick = new Person("nick")
  nick.toString
  
//   作者：尼克陈
//   链接：https://juejin.cn/post/6934498361475072014
//   来源：稀土掘金
//   著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。