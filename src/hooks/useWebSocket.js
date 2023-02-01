import { useRef } from 'react';

export const useWebSocket = () => {
  const socket = useRef(new WebSocket('ws://localhost:8080/websocket/1'));

  socket.current.addEventListener('open', () => {
    socket.send('Hello Server!');
  });

  socket.current.addEventListener('message', (event) => {
    // eslint-disable-next-line no-console
    console.log('Message from server ', event.data);
  });

  const sendMessage = (position) => {
    socket.current.send(JSON.stringify(position));
  };

  return { socket, sendMessage };
};
