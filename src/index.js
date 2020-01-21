import React from "react";
import ReactDOM from "react-dom";
import useSocket from "./useSocket";

const SocketContainer = ({}) => {
  const url = `ws://localhost:1337`;
  const onOpen = socket => { socket.send('hello'); };
  const onMsg = (socket, msg) => { console.log('message received'); };

  useSocket({ url, onOpen, onMsg });

  return (
    <h1>React Socket</h1>
  );
}
export default SocketContainer;


ReactDOM.render(<SocketContainer />, document.getElementById("app"));
