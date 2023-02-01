import { useRef } from 'react';

export const useWS = () => {
  const socket = useRef(new WebSocket('ws://localhost:8080/websocket/1'));
  // Connection opened
  socket.current.addEventListener('open', function (event) {
    socket.send('Hello Server!');
  });

  socket.current.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
  });

  const sendMessage = () => {
    //以 emit 送訊息，並以 getMessage 為名稱送給 server 捕捉
    // ws.emit('getMessage', '只回傳給發送訊息的 client');
  };

  return {
    socket,
    sendMessage
  };
};
