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

      // these handlers just use whatever is passed in
      socket.onopen = () => {
        onOpen(socket);
      };
      socket.onmessage = message => {
        onMsg(socket, message);
      };
      socket.onclose = () => {
        onClose(socket);
      };

      // returning a function is the same as `componentWillUnmount`
      // its good practice to clean-up and close connections
      return () => {
        socket.close();
      };
    },
    // only create a socket if we get a new url
    [url]
  );

  return '';
};

export default useSocket;
