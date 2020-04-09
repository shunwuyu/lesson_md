module.exports = (config, resolve) => {
  const createCSSRule = (lang, test, loader, options = {}) => {
    const baseRule = config.module.rule(lang).test(test);
    const normalRule = baseRule.oneOf('normal');
    normalRule
      .use('extract-css-loader')
      .loader(require('mini-css-extract-plugin').loader)
      .options({
        hmr: process.env.NODE_ENV === 'development',
        publicPath: '/'
      })

    normalRule
      .use('css-loader')
      .loader(require.resolve('css-loader'))
      .options({})
    if (loader) {
      const rs = require.resolve(loader)
      normalRule
        .use(loader)
        .loader(rs)
        .options(options)
    }

  }
  
  return () => {
    createCSSRule('css', /\.css$/, 'css-loader', {});
  }
}