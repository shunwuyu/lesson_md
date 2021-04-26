const { template } =  require('lodash');
const compiler = template('<h1><%= title %></h1>')
const html = compiler({ title: 'My Component' })

console.log(html);
const newHtml = compiler({ title: 'New Component' })
console.log(newHtml);