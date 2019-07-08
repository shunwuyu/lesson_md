// import lodash from "lodash-es";
import { isArray } from 'lodash-es';
import item from './sync.css';
import help from "../common/help.js";
const sync = function() {
  console.log('sync', help.version);
  fetch('/api/test')
  .then(res => res.json())
  .then(res => {
    console.log('/api/test->', res);
  })
  // document.getElementById('app').innerHTML= `<h1 class="${item.test}">hello</h1>`
}
const isArrayTest = function(arg) {
  // 分析不到
  console.log(isArray(arg));
}
export {
  sync,
  isArrayTest
}