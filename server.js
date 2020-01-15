
// ws allows us to use server side websockets (aka in node)
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 1337 });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  ws.send('something');
});
