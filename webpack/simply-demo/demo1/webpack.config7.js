const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 引入插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
console.log('process.env.NODE_ENV=', process.env.NODE_ENV) // 打印环境变量

module.exports = {
    mode: 'development', // 模式
    entry: './src/index.js', // 打包入口地址
    output: {
      filename: 'bundle.js', // 输出文件名
      path: path.join(__dirname, 'dist') // 输出文件目录
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'), // 静态文件目录
        compress: true, //是否启动压缩 gzip
        port: 8080, // 端口号
        // open:true  // 是否自动打开浏览器
      },
    module: { 
      rules: [
        {
          test: /\.css$/, //匹配所有的 css 文件
          use: 'css-loader' // use: 对应的 Loader 名称
        }
      ]
    },
  plugins:[ // 配置插件
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin() // 引入插件
  ]
}