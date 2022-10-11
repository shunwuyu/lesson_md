const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');
const px2rem = require('postcss-px2rem')
const postcss = require('postcss')

const basePath = __dirname;

module.exports = {
    mode: "development",
    devServer: {
        port: 8080,
    },
    context: path.join(basePath, 'src'),
    entry: {
        app: './index.js',
    },
    output: {
        path: path.join(basePath, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                loader: "postcss-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            hash: true,
        }),
        px2rem({
            remUnit: 75
        })   
    ]
}