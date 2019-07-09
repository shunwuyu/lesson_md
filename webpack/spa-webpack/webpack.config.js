const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const PurifyCSSPlugin = require('purifycss-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const argv = require('yargs-parser')(process.argv);
const merge = require('webpack-merge');
const _mode = argv.mode || 'development';
const _modeFlag = (_mode == 'production' ? true : false)
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
const glob = require('glob');
const path = require('path');
console.log('__mode', _mode);
const webpackConfig = {
  entry: [
    path.resolve(__dirname, './src/index.js')
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader'],
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              // you can specify a publicPath here
              // by default it uses publicPath in webpackOptions.output
              publicPath: '../',
            },
          },
          // 'style-loader',
          {
            loader: "css-loader",
            // options: {
            //   modules: {
            //     mode: 'local',
            //     // localIdentName: '[path][name]__[local]--[hash:base64:5]',
            //     // localIdentName: '[name]__[local]--[hash:base64:5]',
            //   }
            // }
          }
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      // cacheGroups 决定生成的文件
      cacheGroups: {
        commons: {
          // "initial", "async"（默认） 或 "all"
          chunks: 'initial', //  initial 对于异步导入的文件不处理
          name: 'common',  // name 生成文件名
          minChunks: 1, //  其他entry引用次数大于此值，默认1
          minSize: 0 // 最小尺寸必须大于此值
        }
      }
    },
    runtimeChunk: {
      name: 'runtime'
    }
  },
  devServer: {
    contentBase: './dist',
    hot: true,
    before(app) {
      app.get("/api/test", (req, res) => {
        res.send({
          code: 0,
          msg: '123'
        })
      })
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    }),
    // new WebpackDeepScopeAnalysisPlugin(),
    // new CleanWebpackPlugin(['dist']),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: _modeFlag ? 'styles/[name].[hash:5].css' : 'styles/[name].css',
      chunkFilename: _modeFlag ? 'styles/[id].[hash:5].css' : 'styles/[id].css',
    }),
    new PurifyCSSPlugin({
      // Give paths to parse for rules. These should be absolute!
      paths: glob.sync(path.join(__dirname, './src/index.html')),
    })
  ],
}

module.exports = merge(webpackConfig, _mergeConfig);