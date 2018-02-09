import Koa from 'koa'
import views from 'koa-views'
import path from 'path'
import index from './routes/index'

const app = new Koa()
import { faceDetecte } from './utils/identity.js'
// 导入WebSocket模块:
const WebSocket = require('ws')

// 引用Server类:
const WebSocketServer = WebSocket.Server

// 实例化:
const wss = new WebSocketServer({
  port: 4000
})
wss.on('connection', function (ws) {
  console.log(`[SERVER] connection()`);
  ws.on('message', function (message) {
    ws.send(JSON.stringify(faceDetecte(message)))
  })
})

app.use(views(path.resolve(__dirname, './views'), { map: { html: 'ejs' } }))

app.use(require('koa-static')(__dirname + '/public'))

// 配置路由
app.use(index.routes(), index.allowedMethods())

let server = app.listen(3010)
console.log('系统启动，端口：3010')
