- npm init -y
- npm i @babel/cli @babel/core --save-dev
- .\node_modules\.bin\babel --help
- .\node_modules\.bin\babel script.js
  没什么需要编译的
   .\node_modules\.bin\babel .\script.js -o script-compiled.js
- src/a.js  b.js  
  .\node_modules\.bin\babel src -d lib
  .\node_modules\.bin\babel src -w -d lib

- 放到npm 里
  script 
  npm run build

- es6  arrow function  ->  es5  function 
  plugin 插件
  presets  相关插件的集合

- es2015  spread 操作符
  script.js   npm run build  原样输出 
  npm i @babel/preset-es2015

- .babelrc文件
  ```
    {
      "presets": ["@babel/preset-env"]
    }
  ```

- @babel/preset-react

- c.js   class 
