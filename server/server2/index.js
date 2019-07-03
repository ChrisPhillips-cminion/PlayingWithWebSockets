const WebSocket = require('ws')
const sleep = require("sleep").sleep
const wss = new WebSocket.Server({
  port: process.env.port || 8080
})
console.log(`WS Started`)
wss.on('connection', ws => {
  console.log(`Got Connection `)
  ws.on('message', message => {
    console.log(`Received message => ${message}`)
  })
  i = 0;
  while (1) {
    ws.send("The number is " + i);
    i++;
    sleep(5)
  }
})
