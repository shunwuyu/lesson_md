const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './app.js',
    output: {
        filename: 'bundle.js',
        publicPath: '/',
    },
    optimization: {
        splitChunks: {
        chunks: 'async',
        name: 'common',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html'
        })
    ]
};