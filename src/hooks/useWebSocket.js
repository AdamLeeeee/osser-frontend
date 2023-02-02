import { useRef } from 'react';

export const useWebSocket = (id) => {
  const socket = useRef(new WebSocket(`ws://localhost:8080/${id}`));

  socket.current.addEventListener('message', (event) => {
    // eslint-disable-next-line no-console
    console.log('Message from server ', event.data);
  });

  const sendMessage = (position) => {
    socket.current.send(JSON.stringify(position));
  };

  return { socket, sendMessage };
};
