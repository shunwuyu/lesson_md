// use
// 2 最后的 loader 最早调用，传入原始信息
// 3 中间 loader 执行的时候 传入的是上一个 loader 执行的结果
// 4 loader 需要异步 this.async() this.callback()]
/**
 * 内容
 * map
 * 元信息
 */
module.exports = function(content, map, meta) {
  console.log('my loader--------:', content);
  return content + this.data.value;
}
// 5 前置钩子 执行 loader 之前就能执行
module.exports.pitch = function(remainRequest, preRequest, data) {
  data.value = '前置钩子'
}
// 前置钩子 执行顺序
// [a-loader, b-loader] a-loader.pitch b-loader.pitch b-loader a-loader