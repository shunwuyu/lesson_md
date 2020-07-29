// 函数的形参是值传递的
// webSite属于复合数据类型，函数参数中以地址传递，修改值会影响到原始值，
// 但如果将其完全替换成另一个值，
// 则原来的值不会受到影响
// var a = 2为例 LHS查询
// RHS查询与简单地查找某个变量的值别无二致，
// 而LHS查询则是试图找到变量的容器本身，从而对其赋值。
// 当变量出现在赋值操作的左侧时进行LHS查询，出现在右侧时进行RHS查询。
function changeObjProperty(o) { //o形参是一个LHS查询
  o.siteUrl = "http://www.baidu.com"
  o = new Object()
  o.siteUrl = "http://www.google.com"
} 
let webSite = new Object();
changeObjProperty(webSite);
console.log(webSite.siteUrl);
