const pluginName = 'HtmlAfterPlugin';

class HtmlAfterPlugin {
  // webpack 核心
  apply(compiler) {
    compiler.hooks.compilation.tap(pluginName, compilation => {
      console.log('🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎🍎');
      // 整个 html 转换完成之前
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(pluginName,htmlPluginData=>{
        const result = htmlPluginData.assets.js;
        let _html = htmlPluginData.html;
        console.log("结果",result);
        _html = _html.replace("<!--injectjs-->",`<script src="/${result}"></script>`);
        htmlPluginData.html = _html;
      });
    });
  }
}

module.exports = HtmlAfterPlugin