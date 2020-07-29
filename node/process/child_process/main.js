const http = require('http');
const longComputation = () => {
  let sum = 0;
  for (let i = 0; i < 1e10; i++) {
    sum += i;
  };
  return sum;
};
const server = http.createServer();
server.on('request', (req, res) => {
  if (req.url === '/compute') {
    const t1 = new Date();
    console.info('计算开始',t1);
    const sum = longComputation();
    const t2 = new Date();
    console.info('计算结束',t2);
    return res.end(
      JSON.stringify({
        sum: `Sum is ${sum}`,
        t: t2 - t1
      }));
  } else {
    res.end('Ok')
  }
});

server.listen(3333);