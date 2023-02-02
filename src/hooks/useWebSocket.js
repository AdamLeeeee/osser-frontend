import { useEffect, useRef, useState } from 'react';

export const useWebSocket = (id) => {
  const socket = useRef(null);
  const [mice, setMice] = useState('[]');

  useEffect(() => {
    const _socket = new WebSocket(`ws://localhost:8080/${id}`);
    _socket.addEventListener('message', (event) => {
      setMice(event.data);
      // eslint-disable-next-line no-console
    });

    socket.current = _socket;
  }, []);

  const sendMessage = (position) => {
    socket.current.send(JSON.stringify(position));
  };

  return { socket, sendMessage, mice };
};
