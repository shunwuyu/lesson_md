//实现一个极简的数据响应式 https://lucifer.ren/fe-interview/#/./topics/algorthimn/observable?id=%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E6%9E%81%E7%AE%80%E7%9A%84%E6%95%B0%E6%8D%AE%E5%93%8D%E5%BA%94%E5%BC%8F

// 有一个全局变量 a，有一个全局函数 b，实现一个方法bindData，执行后，a中任何属性值修改都会触发b的执行。
// const a = {
//   b: 1
// };
// function b() {
//   console.log("a的值发生改变", a.b);
// }
// bindData();
// // 此时输出 a的值发生改变
// a.b = 3; 

// // console.log(a.b);

// function bindData() {
//   Object.keys(a).map(key => { //Object.keys() 方法会返回一个由一个给定对象的自身可枚举属性组成的数组，
//     let v = a[key];
//     Object.defineProperty(a, key, { //Get：指读取属性时调用的函数。Set：指写入属性时调用的函数。
//       get() {
//         console.log('你正在读取a里面的值');
//         return v;
//       },
//       set(newA) {
//         v = newA;
//         b();
//       }
//     });
//   });
// }


//-----------------------------
//一个页面从输入url到页面加载显示完成，这个过程都发生了什么？
// https://juejin.im/post/5c1869ab6fb9a049f154207a
// 1、浏览器的地址栏输入URL并按下回车。
// 2、浏览器查找当前URL是否存在缓存，并比较缓存是否过期。
// 3、DNS解析URL对应的IP。
// 4、根据IP建立TCP连接（三次握手）。https://lucifer.ren/fe-interview/#/./topics/network/tcp
// 5、HTTP发起请求。
// 6、服务器处理请求，浏览器接收HTTP响应。
// 7、渲染页面，构建DOM树。
// 8、关闭TCP连接（四次挥手）。
