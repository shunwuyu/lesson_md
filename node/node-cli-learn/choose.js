const inquirer = require('inquirer');
inquirer.prompt([{
  type: 'input',
  name: 'age',
  message: '请输入年龄：',
  default: 18,
  choices: [89, 90, 100]
}, {
  type: 'expand',
  name: 'css',
  message: '使用什么css预处理',
  choices: [
    {key: 'l', name: 'less', value: 'less-less', short: 'less-short'},
    {key: 'a', name: 'less1', value: 'less1-less1', short: 'less1-short'},
    {key: 's', name: 'sass', value: 'sass-sass', short:'sass-short'}]
}])
.then(res => {
  console.log(res);
})
