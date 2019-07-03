const WebSocket = require('ws')
const sleep = require("sleep").sleep
console.log("WebSoc Running")
const wss = new WebSocket.Server({
  port: 8080
})

console.log("WebSoc Running")
wss.on('connection', ws => {
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
