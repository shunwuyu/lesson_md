const rimraf = require('rimraf');
const ora = require('ora') 
const path = require('path')
console.log(process.cwd(), __dirname);
rimraf.sync(path.join(process.cwd(), 'dist'))
const spinner = ora('开始构建项目...') 
spinner.start()