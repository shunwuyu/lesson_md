const withCss = require('@zeit/next-css')
//后端运行
if(typeof require !== 'undefined'){
  require.extensions['.css']=file=>{}
}

module.exports = withCss({})