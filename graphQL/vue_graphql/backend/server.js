import koa from 'koa'
import koaRouter from 'koa-router'
import koaBody from 'koa-bodyparser'
import websocketify from 'koa-websocket'

const app = websocketify(new koa())
const PORT = 3000

app.listen(PORT)
