// var a = [1, 2, 3];
// console.log(a instanceof Array); // true
// console.log(a instanceof Object); // true

// var userInfo = { userName: "zhangsan" };
// console.log(userInfo instanceof Array); // false
// console.log(userInfo instanceof Object); 

var a = [1,2,3]

function getType(obj){
    if(obj instanceof Array){
        return 'Array'//如果是数组，则返回数组类型
    }else if(obj instanceof Object){
        return 'Object'
    }else{
        return '既不是Array也不是Object'
    }
 }
 console.log(getType(a))
