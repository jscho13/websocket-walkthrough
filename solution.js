
// ws allows us to use server-side websockets (aka in node)
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 1337 });

server.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('Message from FE: ', message);
  });

  ws.send('ka');
});

