// 22. 写一下一个方法，求字符串的长度
function byte(str) {
  var bytes = str.length;
  for(var i=0; i<bytes; i++) {
   if(str.charCodeAt(i)>255) {
    bytes++;
   }
  }
  return bytes
 }
 console.log(byte('da武da'));