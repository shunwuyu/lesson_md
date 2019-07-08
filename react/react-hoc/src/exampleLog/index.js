
// function log(target, name, descriptor) {
//   console.log(target, name,descriptor)
//   var oldValue = descriptor.value;

//   descriptor.value = function(...args) {
//     console.log(`Calling ${name} with`, args);
//     return oldValue.apply(this, args);
//   };

//   // return descriptor;
// }
let log = (type) => {
  return (target, name, descriptor) => {
    const method = descriptor.value;
    descriptor.value =  (...args) => {
      console.info(`(${type}) 正在执行: ${name}(${args}) = ?`);
      let ret;
      try {
        ret = method.apply(target, args);
        console.info(`(${type}) 成功 : ${name}(${args}) => ${ret}`);
      } catch (error) {
        console.error(`(${type}) 失败: ${name}(${args}) => ${error}`);
      }
      return ret;
    }
  }
};
class Math{
  @log('ADD')
  add (a, b) {
    return a + b;
  }
  @log('divide')
  divide (a, b) {
    return a / b;
  }
}
const math = new Math();
console.log('log', math.add(1, 3));
console.log('log', math.divide(1, 3));
export default math;