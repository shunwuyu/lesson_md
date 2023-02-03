const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.[contenthash:8].js',
    },
    module: {
        rules: [
          {
            test: /\.(jsx|js)$/,
            use: 'babel-loader',
            exclude: /node_modules/,
          },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './public/index.html'),
          inject: 'body',
          scriptLoading: 'blocking',
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        port: '3001', // 默认是 8080
        hot: true,
        compress: true, // 是否启用 gzip 压缩
    },
    "mode": "production"
}