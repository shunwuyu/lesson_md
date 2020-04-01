const rimraf = require('rimraf');
const ora = require('ora')
const path = require('path')
rimraf.sync(path.join(process.cwd(), 'dist'))
const config = require('./base')()
const webpack = require('webpack')
const spinner = ora('开始构建项目...')
spinner.start()

webpack(config.toConfig(), function (err, stats) {
  spinner.stop()
  if (err) throw err
})