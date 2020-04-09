module.exports = (config, resolve) => {
  const baseRule = config.module.rule('js').test(/.js?$/); // js jsx
  const babelPath = resolve('babel.js')
  // console.log(babelPath, '??????????')
  const babelConf = require(babelPath);
  console.log(babelConf, '||||||||||||||');
  const version = require(resolve('node_modules/@babel/core/package.json')).version
  return () => {
    baseRule
      .use('babel')
      .loader(require.resolve('babel-loader'))
      .options(babelConf({ version }))
  }
}