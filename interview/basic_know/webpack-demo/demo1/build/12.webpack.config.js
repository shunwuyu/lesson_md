const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    mode:'development', // 开发模式
    entry: path.resolve(__dirname,'../src/main.js'),    // 入口文件
    output: {
      filename: '[name].[hash:8].js',      // 打包后的文件名称
      path: path.resolve(__dirname,'../dist')  // 打包后的目录
    },
    module:{
      noParse: /jquery/,
      rules:[
        {
          test:/\.js$/,
          use:{
            loader:'babel-loader'
          },
          exclude:/node_modules/
        },
        {
          test:/\.css$/,
          use:['style-loader','css-loader', 'postcss-loader'] // 从右向左解析原则
        },
        {
          test:/\.less$/,
          use:['style-loader','css-loader','postcss-loader','less-loader'] // 从右向左解析原则
        },
        {
          test: /\.(jpe?g|png|gif)$/i, //图片文件
          use: [
            {
              loader: 'url-loader',
              options: {
                include: [path.resolve(__dirname, '../src/assets/icons')],
                exclude: /node_modules/,
                limit: 10240,
                fallback: {
                  loader: 'file-loader',
                  options: {
                      name: 'img/[name].[hash:8].[ext]'
                  }
                }
              }
            }
          ]
        },
        {
          test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, //媒体文件
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10240,
                fallback: {
                  loader: 'file-loader',
                  options: {
                    name: 'media/[name].[hash:8].[ext]'
                  }
                }
              }
            }
          ]
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i, // 字体
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10240,
                fallback: {
                  loader: 'file-loader',
                  options: {
                    name: 'fonts/[name].[hash:8].[ext]'
                  }
                }
              }
            }
          ]
        }
      ]
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '../src'),
        'assets': path.resolve(__dirname, '../src/assets'),
        'components': path.resolve(__dirname, '../src/component')
      },
      extensions: ['*', '.js', '.json', '.jsx']
    },
    plugins:[
      new HtmlWebpackPlugin({
        template:path.resolve(__dirname,'../public/index.html')
      }),
      new CleanWebpackPlugin()
    ]
}
