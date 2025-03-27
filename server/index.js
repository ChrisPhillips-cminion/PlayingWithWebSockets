//This sample is based off the examples on https://www.npmjs.com/package/ws

const WebSocket = require('ws')

const sleep = require("sleep").sleep
const wss = new WebSocket.Server({
  port: process.env.port || 8080
})

wss.binaryType = "arraybuffer";


console.log(`WS Started`)

wss.on('connection', ws => {

  console.log(`Got Connection`)
  ws.send("Connection Established");

  ws.on('message', message => {
    console.log(`Received message => ${message.length}`)
    sleep(5)
    ws.send(message)
    
  })
})
wss.on('error',ws => {
  console.log(JSON.stringify(ws))
})
