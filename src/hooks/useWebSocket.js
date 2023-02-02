import { useRef } from 'react';

export const useWebSocket = (id) => {
  const socket = useRef(new WebSocket(`ws://localhost:8080/${id}`));

  socket.current.addEventListener('message', (event) => {
    // eslint-disable-next-line no-console
    console.log('Message from server ', event.data);
  });

  const sendMessage = (position) => {
    socket.current.send(position);
  };

  // TODO: 关闭页面时，关闭 socket

  return { socket, sendMessage };
};
