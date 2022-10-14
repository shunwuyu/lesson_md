// +++++++
const { findSync } = require('../lib')
const Config = require('webpack-chain');
const config = new Config();
// +++++++
const files = findSync('config')
const path = require('path');
//  两个地方都要， 封装一下
const resolve = src => {
  return path.join(process.cwd(), src);
};

module.exports = () => {
  // ++++++++
  const map = new Map() // ？ 
  files.map(_ => {
    const name = _.split('/').pop().replace('.js', '')
    // 配置，  路径
    return map.set(name, require(_)(config, resolve))
  })
  map.forEach(v => v());
  console.log(map);
  return config
  //  -----
  // config
  //   .entry('app')
  //   .add(resolve('src/main.js'))
  //   .end()
  //   .set('mode', process.env.NODE_ENV)
  //   .output.path(resolve('dist'))
  //   .filename('[name].bundle.js');



  return config
}