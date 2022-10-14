// 场景2-用来计数循环变量泄露为全局变量
var str = "javaScript";
for(var i = 0;i<str.length;i++) {
    console.log(i,str[i]);
}

console.log(i);