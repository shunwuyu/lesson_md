const fs = require('fs');
const promisify = func =>
  (...args) =>
    new Promise((resolve, reject) =>
      func(...args, (err, result) =>
        err ? reject(err) : resolve(result))
    );
// fs.readFile('./call.html', (err, data) => {
//   console.log(data);
// })
const promiseFsReadFile = promisify(fs.readFile);
promiseFsReadFile('./call.html', {
  encoding: 'utf8'
})
  .then(res => {
    console.log('res', res);
  })
(
  async function() {
    
  }
)