//This sample is based off the examples on https://www.npmjs.com/package/ws

const WebSocket = require('ws')

const sleep = require("sleep").sleep
const wss = new WebSocket.Server({
  port: process.env.port || 8080
})
console.log(`WS Started`)
var stack  = []
wss.on('connection', ws => {
  console.log(JSON.stringify(ws))
  console.log(`Got Connection`)
  ws.send("Connection Established");
    ws.send(JSON.stringify(ws))
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
  })
})
wss.on('error',ws => {
  console.log(JSON.stringify(ws))
})
