import TS from './ts/index.ts'

require('./style/index.css')
require('./style/index.styl')
require('./style/index.postcss')

new TS();

const h2 = document.createElement('h2')
h2.innerText = '111sssddsss111'
h2.className = 'test'
document.body.append(h2);
