import { createElement, render, renderDom } from './element';

let virtualDom = createElement('ul', {class: 'list'}, [
    createElement('li', {class: 'item'}, ['周杰伦']),
    createElement('li', {class: 'item'}, ['林俊杰']),
    createElement('li', {class: 'item'}, ['王力宏'])
]);

// console.log(virtualDom);
let el = render(virtualDom); // 渲染虚拟DOM得到真实的DOM结构
console.log(el, '----------|||||||||||||----');
// 直接将DOM添加到页面内
renderDom(el, document.getElementById('root'));



