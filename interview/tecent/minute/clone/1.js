const obj = {
    a: 1,
    b: 'two',
    c: [3, 4, 5],
    d: function() {
      console.log('Hello World');
    }
};
// 直接报错 circular
obj.e = obj;
  
// 序列化该对象 函数不会序列化
const jsonString = JSON.stringify(obj);
console.log(jsonString);