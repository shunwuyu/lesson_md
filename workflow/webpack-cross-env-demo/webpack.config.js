const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

console.log('process.env.NODE_ENV=', process.env.NODE_ENV)

const config = {
    entry: './src/index.js', // 打包入口地址
    output: {
      filename: 'bundle.js', // 输出文件名
      path: path.join(__dirname, 'dist') // 输出文件目录
    },
    module: { 
      rules: [
        {
          test: /\.css$/, //匹配所有的 css 文件
          use: 'css-loader' // use: 对应的 Loader 名称
        },
        {
          test: /\.styl$/i, //匹配所有的 sass/scss/css 文件
          use: [
            'style-loader',
            'css-loader',
            'postcss-loader',
            'stylus-loader', 
          ]
        }
      ]
    },
    plugins:[ // 配置插件
      new HtmlWebpackPlugin({
        template: './src/index.html'
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
             // 从public中复制文件
              from: path.resolve(__dirname,'public'),
             // 把复制的文件存放到dis里面
              to: path.resolve(__dirname,'dist')
          }
         
        ],
      })
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'dist'),
      },
      compress: true,
      port: 8080,
      open:true 
    }
  }
  
  module.exports = (env, argv) => {
    console.log('argv.mode=',argv.mode) // 打印 mode(模式) 值
    // 这里可以通过不同的模式修改 config 配置
    return config;
  }
