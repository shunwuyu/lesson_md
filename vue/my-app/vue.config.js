module.exports = {
  configureWebpack: config => {
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'https://api.douban.com/v2',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}