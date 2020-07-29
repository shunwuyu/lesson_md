const Config = require('webpack-chain');
const config = new Config();
const path = require('path');
//  两个地方都要， 封装一下
const resolve = src => {
  return path.join(process.cwd(), src);
};

module.exports = () => {
  config
    .entry('app')
    .add(resolve('src/main.js'))
    .end()
    .set('mode', process.env.NODE_ENV)
    .output.path(resolve('dist'))
    .filename('[name].bundle.js');

  return config
}