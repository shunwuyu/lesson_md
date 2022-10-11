const { Wechaty } = require('wechaty')

Wechaty.instance()
  .on('scan', (qrcode, status) => console.log(`Scan QR Code to login:${status}\nhttps://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrcode)}`))
  .start()