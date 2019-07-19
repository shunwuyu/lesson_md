## 使用 es module
正确使用ESM
导出
```js
export default 'hello world'; // default export
export const name = 'yj'; // name export
```
导入
```js
import lib from './lib'; // default import
import * as lib from './lib'; // 
import { method1, method2 } from './lib';
```