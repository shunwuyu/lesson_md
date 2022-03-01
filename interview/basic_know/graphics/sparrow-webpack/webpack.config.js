const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development', // 开发模式
    entry: {
      main:path.resolve(__dirname,'./src/main.js'),
  }, 
    output: {
      filename: '[name].[hash:8].js',      // 打包后的文件名称
      path: path.resolve(__dirname,'../dist')  // 打包后的目录
    },
    module:{
      rules:[
        {
          test:/\.js$/,
          use:{
            loader:'babel-loader',
            options:{
              presets:['@babel/preset-env']
            }
          },
          exclude:/node_modules/
        },
     ]
  },
    plugins:[
      new HtmlWebpackPlugin({
        template:path.resolve(__dirname,'./index.html'),
        filename:'index.html',
        chunks:['main'] // 与入口文件对应的模块名
      })
    ]
}