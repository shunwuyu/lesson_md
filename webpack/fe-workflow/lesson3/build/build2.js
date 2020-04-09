const rimraf = require('rimraf');
const ora = require('ora') 
const path = require('path')
console.log(process.cwd(), __dirname);
rimraf.sync(path.join(process.cwd(), 'dist'))

// -------------
// const config = require('./base1')() // 架构分离点
const config = require('./base')() 
const webpack = require('webpack')
webpack(config.toConfig(), function (err, stats) {
  spinner.stop()
  if (err) throw err

})

const spinner = ora('开始构建项目...') 
spinner.start()