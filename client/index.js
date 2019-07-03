const WebSocket = require('ws')
// const url = 'ws://localhost:3000'
// const url = 'https://rare-seahorse-54.localtunnel.me'
const url = 'ws://idg-perf.apicww.cloud:3080'
// const url = 'wss://websoc-cminion.us-south.cf.appdomain.cloud'

const connection = new WebSocket(url)


connection.onopen = () => {
  connection.send('hey')
}


connection.onerror = error => {
  console.log(`WebSocket error: ${error}`)
  console.log(error)
}

connection.onmessage = e => {
  console.log(e.data)
}
