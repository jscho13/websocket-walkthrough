import { useState, useEffect } from 'react';

const useSocket = ({
  url,
  onOpen = (s) => {},
  onMsg = (s, m) => {},
  onClose = (s) => {}
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
