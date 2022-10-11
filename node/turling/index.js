const TULING = require('tuling');

const tuling = new TULING({key: 'b912dec315b44dab8269afca48f80502'});

(async() => {
  const result = await tuling.send({
    userid: 1,
    info: '你好吗',
    loc: '南京市'
  });
  console.log(result);
})();