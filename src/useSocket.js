import { useState, useEffect } from 'react';

const useSocket = ({
  url,
  onOpen = () => {
    console.log('Opening websocket');
  },
  onMsg = (s, m) => {
    console.log('Message data', m);
  },
  onClose = () => {
    console.log('Disconnecting websocket');
  }
}) => {
  useEffect(
    () => {
      const socket = new WebSocket(url);
      socket.onopen = () => {
        onOpen(socket);
      };
      socket.onmessage = message => {
        onMsg(socket, message);
      };
      socket.onclose = () => {
        onClose(socket);
      };

      return () => {
        socket.close();
      };
    },
    [url]
  );

  return '';
};

export default useSocket;
