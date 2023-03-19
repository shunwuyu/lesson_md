import path from 'path'; // 原生支持es6写法
import commonjs from '@rollup/plugin-commonjs'
//跟webpack 比较像
// 绝对路径
// const absPath = (filename) => path.resolve(__dirname, filename);
export default {
    input: ('./src/index.js'),
    // input: absPath('src/index.ts'),
    output: {
        file: './dist/Vue.js',
        // file: absPath('dist/Vue.js'),
        format: 'umd', // 可以直接在浏览器运行
        name: 'VueReactivity' // 同名， 什么都不用改
    },
    plugins: [
        commonjs()
    ]
}
