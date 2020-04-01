const rimraf = require('rimraf');
const ora = require('ora')
const path = require('path')
const webpack = require('webpack')
rimraf.sync(path.join(process.cwd(), 'dist'))
const spinner = ora('开始构建项目...')
spinner.start()
const config = require('./base')()

webpack(config.toConfig(), function (err, stats) {

})