const url = 'https://www.example.com/?name=John&age=30&location=New+York';

// 使用正则表达式匹配参数
const regex = /[?&]([^=#]+)=([^&#]*)/g;

let match;
let params = {};

while ((match = regex.exec(url))) {
  // 将参数添加到params对象中
  params[match[1]] = decodeURIComponent(match[2].replace(/\+/g, ' '));
}

console.log(params);