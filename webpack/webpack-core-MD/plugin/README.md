```js
const pluginName = 'ConsoleLogOnBuildWebpackPlugin';

class ConsoleLogOnBuildWebpackPlugin {
    apply(compiler) {
        compiler.hooks.run.tap(pluginName, compilation => {
            console.log("webpack 构建过程开始！");
        });
    }
}
```
1. 插件一定要有 apply
2. 有 compiler
3. compiler 留有 钩子 所以外界可以注册的接口
4. 该执行的时候定位插件