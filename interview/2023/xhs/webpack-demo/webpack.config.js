const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack');
const TerserWebpackPlugin = require('terser-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          // 将 CSS 代码提取到单独的文件中
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader'
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      // 使用 css-minimizer-webpack-plugin 插件压缩 CSS
      new CssMinimizerPlugin(),
      new TerserWebpackPlugin({
        terserOptions: {
          compress: {
            pure_funcs: ['console.log'], // 不去除 console.log 函数
          },
          keep_classnames: true, // 保留类名
          keep_fnames: true, // 保留函数名
        },
      }),
    ],
  },
};