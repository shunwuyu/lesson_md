实现原生ajax
ajax 的全称是Asynchronous JavaScript and XML
ajax就是异步的js和服务端的数据

1.2 组成
异步的js:事件,对象等
其他js:数据处理和解析的js
服务器的载体:xhr对象
服务端的数据:json,xhr,html,txt等字符型数据

1.3 作用
它作为前端向后端发送数据请求的重要手段,可以实现网页无刷新加载数据.

1.4 利弊
与传统的form表单的get和post方式相比较,ajax的优点很明显

优点:1.提升加载速度,实现局部加载
     2.节省性能,能很好提升用户体验
缺点:1.破坏了浏览器的前进后退功能
     2.破坏了seo的网络优化

2.1.1 ajax的GET请求方式
//1.创建xhr对象
var xhr = new XMLHttpRequest();
//2.xhr的发送方式:get  
xhr.open("GET", url, true)
//参数1:请求方式
//参数2:url是后端文件所在服务器的位置
//参数3:异步true;同步false
//3.监听xhr对象的状态
xhr.onreadystatechange = function () {
if (xhr.readyState == 4 && xhr.status == 200) {
    //客户端状态码为4:响应内容解析完成,可以调用
    //服务端的状态码为200:交易成功
    console.log(xhr.responseTxt)
    //返回响应信息
}
//4.发送信息
xhr.send();


ajax的POST和GET的结构大体相同,但有以下三点区别
区别1:post发送数据位置是send()内,而不是拼接在url后