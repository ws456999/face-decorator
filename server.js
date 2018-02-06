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
    // var base64Data = message.replace(/^data:image\/\w+;base64,/, "");
    // var dataBuffer = new Buffer(base64Data, 'base64');
    // console.log(dataBuffer)
    // var buff = new Buffer(message, 'base64')
    // console.log(faceDetecte(message), 1)
    ws.send(JSON.stringify(faceDetecte(message)))
    // ws.send('hello')
      // faceDetecte(message)
      // console.log(`[SERVER] Received: ${message}`);
      // ws.send(`ECHO: ${message}`, (err) => {
      //     if (err) {
      //         console.log(`[SERVER] error: ${err}`);
      //     }
      // });
  })
});

// setTimeout(() => {
//   faceDetecte('WechatIMG238.jpeg')
// }, 2000)

// app.use((ctx) => {
//   ctx.body = 'Hello Koa'
// })

app.use(views(path.resolve(__dirname, './views'), { map: { html: 'ejs' } }))

app.use(require('koa-static')(__dirname + '/public'))

// 配置路由
app.use(index.routes(), index.allowedMethods())

let server = app.listen(3000)
console.log('系统启动，端口：3000')

// let io = socketIO(server)

// io.on('connection', data => {
//   console.log(123, data)
// })
