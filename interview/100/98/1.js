function changeObjProperty(o) {
  o.siteUrl = "http://www.baidu.com"
  o = new Object()
  // console.log(o.siteUrl);
  o.siteUrl = "http://www.google.com"
  // console.log(o.siteUrl);
} 
// 引用式赋值 没关系了
let webSite = new Object();
changeObjProperty(webSite);
console.log(webSite.siteUrl);
