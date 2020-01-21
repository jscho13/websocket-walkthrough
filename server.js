
// ws allows us to use server-side websockets (aka in node)
const WebSocket = require('ws');

const server = new WebSocket.Server({ port: 1337 });

server.on('connection', function connection(ws) {

  let i=0;
  setInterval(function ping() {
    i++;
    ws.send('keep-alive '+i);
  }, 3000);
});

