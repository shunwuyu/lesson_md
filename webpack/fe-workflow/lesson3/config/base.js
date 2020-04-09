module.exports = (config, resolve) => {
  return () => {
    config
      .entry('app') // 入口取名
      .add(resolve('src/main.js')) // 入口文件地址
      .end() //读完
      .set('mode', process.env.NODE_ENV)
      .output
      .path(resolve('dist')) // 路径
      .filename('[name].bundle.js'); // []  由entry 民决定
  }
}