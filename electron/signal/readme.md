http://websocket.org/echo.html

websocket 测试
ws://127.0.0.1:8010
{"event": "login"}


两个端
login
JSON.stringify({event: 'control', data: {remote: 663636}})
{"event":"control","data":{"remote":663636}}


JSON.stringify({event:'forward', data: { event: 'offer', data: {offer: 'sdp'}}})