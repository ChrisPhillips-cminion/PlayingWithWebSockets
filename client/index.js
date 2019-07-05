//This sample is based off the examples on https://www.npmjs.com/package/ws

const WebSocket = require('ws')
const url = 'ws://localhost:8080'
'
const connection = new WebSocket(url, {
  headers: {
    "x-ibm-client-id": "",
    "x-ibm-client-secret": "secret"
  }
})


connection.onopen = () => {
  console.log("Connected to " + url)
  connection.send('I AM CONNECTED')
}


connection.onerror = error => {
  console.log(`WebSocket error: ${error}`)
  console.log(error)
}

connection.onmessage = e => {
  console.log(e.data)
}
