// 从传递进来的字母序列中找到缺失的字母并返回它
function fearNotLetter(str) {
  //将字符串转为ASCII码，并存入数组
  let arr=[];
  // asc码
  for(let i=0; i<str.length; i++){
    arr.push(str.charCodeAt(i));
  }
  for(let j=1; j<arr.length; j++){
    let num=arr[j]-arr[j-1];
    //判断后一项减前一项是否为1，若不为1，则缺失该字符的前一项
    if(num!=1){
      //将缺失字符ASCII转为字符并返回 
      return String.fromCharCode(arr[j]-1); 
    }
  }
  return undefined;
}
console.log(fearNotLetter("abce"));

//获得该字符串第一个字符的unicode，然后与 0x24 和 0x5F 作比较
// 若作为一个想进阶中高级的前端，charCodeAt方法的各种妙用还是需要知道的
function isReserved (str) {
  const c = (str + '').charCodeAt(0)
  return c === 0x24 || c === 0x5F
}


// camelize: 连字符转驼峰
const camelizeRE = /-(\w)/g

const camelize = (str) => {
  return str.replace(camelizeRE, (_, c) => c ? c.toUpperCase() : '')
}

console.log(camelize('vue-router'));
