const path = require('path');
const firstPlugin = require('./webpack-firstPlugin.js')
module.exports = {
    mode:'development', // 开发模式
    entry: path.resolve(__dirname,'./src/main.js'),    // 入口文件
    output: {
        filename: '[name].[hash:8].js',      // 打包后的文件名称
        path: path.resolve(__dirname,'./dist')  // 打包后的目录
    },
    module:{
      rules:[{
        test:/\.js$/,
        use:path.resolve(__dirname,'drop-console.js')
        }
      ]
    },
    plugins:[
      new firstPlugin()
    ]
}
