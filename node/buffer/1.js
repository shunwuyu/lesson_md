// const buf1 = Buffer.alloc(10);
// console.log(buf1);
// const buf2 = Buffer.alloc(10, 1); // 初值
// console.log(buf2); 

// const buf2 = Buffer.alloc(10, 16); // 初值 16进制
// console.log(buf2); 

// const buf3 = Buffer.allocUnsafe(10);
// console.log(buf3);
// buf3.fill(1, 0);
// console.log(buf3);

// const buf4 = Buffer.from([1, 2, 3]);
// console.log(buf4)

// const buf5 = Buffer.from('字符串'); //一个中文字占三个字节
// console.log(buf5);

// console.log(buf5.toString('utf8',3,6))
// buf5.write('前',0,3,'utf8');
// console.log(buf5.toString('utf8'));

// let newBuf = buf5.slice(0,4);
// console.log(newBuf);
// console.log(buf5);
// buf5.write('前',0,3,'utf8');
// console.log(buf5);
// console.log(newBuf); //浅拷贝

// let buf1 = Buffer.from('前');
// let buf2 = Buffer.from('端');
// let buf3 = Buffer.concat([buf1,buf2],6);
// console.log(buf3.toString());


Buffer.myConcat = function (list,len) {
  if(typeof len === 'undefined'){ // 求拷贝后的长度
    len = list.reduce((current,next,index)=>{
      return current+next.length;
    },0);
  }
  let newBuffer = Buffer.alloc(len); // 申请buffer
  let index = 0;
  list.forEach(buffer =>{ // 将buffer一一拷贝
    buffer.copy(newBuffer, index);
    index+=buffer.length;
  });
  return newBuffer.slice(0,index); // 返回拷贝后的buffer
}
// 接收请求时会采用concat方法进行拼接
console.log(Buffer.myConcat([buffer1, buffer2, buffer3],10).toString());
