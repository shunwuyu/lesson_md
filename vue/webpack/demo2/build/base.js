const { findSync } = require('../lib')
const Config = require('webpack-chain');
const config = new Config();
const path = require('path');
const resolve = (p) => {
  return path.join(process.cwd(), p)
}
const files = findSync('config')
// console.log(files);
module.exports = () => {
  const map = new Map()
  files.map(_ => {
    const name = _.split('/').pop().replace('.js', '')
    // console.log(require);
    return map.set(name, require(_)(config, resolve))
  })

  map.forEach((v, key) => {
    // css 配置
    if (key === 'css') {
      v('css', /\.css$/);
    } else {
      v()
    }
  })
  
  return config
}