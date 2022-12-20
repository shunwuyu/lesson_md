import {readFile} from 'fs';
// const fs = require('fs')
// const { readFile } = fs;

readFile('./data.json', (err, data) => {
  if(!err) {
    // console.log(data);
    // 而是 Buffer 对象，表示文件的二进制数据内容
    console.log(data.toString('utf-8'));
  } else {
    console.error(err);
  }
});