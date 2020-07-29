const WebSocket = require('ws');
const code2ws = new Map()
const wss = new WebSocket.Server({
  port: 8010
})

// 完成了登录

wss.on('connection', function connection(ws, request) {
  // ws -》 client
  let code = Math.floor(Math.random()*(999999-100000)) + 100000;
  code2ws.set(code, ws)
  ws.sendData = (event, data) => {
    ws.send(JSON.stringify({event, data}))
  }
  ws.on('message', function incoming(message) {
    console.log('imcoming', message);
    // {event, data}
    let parseMessage = {};
    try {
      // 服务器要， 不然会跪掉
      parseMessage = JSON.parse(message)
    } catch(e) {
      ws.sendError('message invalid')
      console.log('parse message error', e)
    }

    let { event, data } = parseMessage
    if (event === 'login') {
      ws.sendData('logined', {code})
    } else if (event === 'control') {
      let remote = +data.remote
      if (code2ws.has(remote)) {
        ws.sendData('controlled', {remote})
        ws.sendRemote = code2ws.get(remote).sendData
        ws.sendRemote('be-controlled', { remote: code })
      }
    } else if (event === 'forward') {
      // data = { event, data}
      ws.sendRemote(data.event, data.data)
    }
  })

  ws.on('close', () => {
    code2ws.delete(code)
    clearTimeout(ws._closeTimeout);
  })
  ws._closeTimeout = setTimeout(() => {
    ws.terminate()
  },10*60*1000)
})