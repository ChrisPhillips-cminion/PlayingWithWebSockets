//This sample is based off the examples on https://www.npmjs.com/package/ws

const WebSocket = require('ws')
const fs = require('fs')
const url = 'ws://localhost:8080'

const connection = new WebSocket(url, {
  headers: {
    "x-ibm-client-id": "ID",
    "x-ibm-client-secret": "secret"
  }
})


connection.onopen = () => {
  console.log("Connected to " + url)

  let img  = fs.readFileSync('./image-38.png');

  connection.send(img)
}


connection.onerror = error => {
  console.log(`WebSocket error: ${error}`)
  console.log(error)
}

connection.onmessage = e => {
  console.log(e.data)
}
