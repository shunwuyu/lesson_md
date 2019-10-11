#!/usr/bin/env node
var program           = require('commander');
var inquirer          = require('inquirer');
var webfontsGenerator = require('webfonts-generator');
var path              = require('path');
var fs                = require('fs');

// 遍历查询SVG文件
function findSvgs(folder, list){
    // console.log('----', folder);
  list = list || [];
  try {
    var files = fs.readdirSync(folder);
    for(var i=0; i<files.length; i++){
      (function(){
        var fileName = files[i],
            filePath = path.join(folder, fileName),
            stats    = fs.statSync(filePath);
        if(!stats.isFile()){
          return findSvgs(filePath, list);
        } else if(path.extname(filePath) === '.svg'){
          list.push(filePath);
        }
      })(i);
    }
  } catch (error) {
    console.error(error);
  }
  return list;
}

program
  .version('0.0.1') // 设置版本号
  .option('-d, --dest <path>', '设置目标文件夹')  // 设置dest参数
  .action(function (cmd) {

    var currentFolder = process.cwd(); // 当前命令执行的目录
    var destFolder    = path.isAbsolute(cmd.dest) ? cmd.dest : path.join(currentFolder,cmd.dest); // 目标目录, 需区分是否为绝对路径
    console.log('destFolder', destFolder);
    inquirer.prompt([
      {
        type: 'confirm',
        name: 'destOk',
        message: '确认使用目标文件夹:' + destFolder
      }
    ]).then(function(answers){
      
      // 用户确认后执行后续的功能
      if(answers.destOk){

        webfontsGenerator({
          files: findSvgs(destFolder),
          dest: cmd.dest,
          html: true
        }, function(error) {
          if (error) {
            console.log('Fail!', error);
          } else {
            console.log('Done!');
          }
        })
  
      }
      
    })
  })

program.parse(process.argv);
