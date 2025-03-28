//This sample is based off the examples on https://www.npmjs.com/package/ws
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const WebSocket = require('ws')
const fs = require('fs')
const url = 'ws://small-gw-0-cp4i.apps.buttons.hur.hdclab.intranet.ibm.com'

// const url = 'ws://127.0.0.1:8080'
const connection = new WebSocket(url, {
  headers: {
    "x-ibm-client-id": "xx"
  }
})

connection.binaryType = "blob";

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
