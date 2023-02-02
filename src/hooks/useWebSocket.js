import { useEffect, useRef, useState } from 'react';

// websocket readyState open constants
const OPEN = 1;

export const useWebSocket = (id) => {
  const socket = useRef(null);
  const [list, setList] = useState([]);

  useEffect(() => {
    const _socket = new WebSocket(`ws://localhost:8080/${id}`);
    _socket.addEventListener('message', (event) => {
      setList(JSON.parse(event.data));
    });

    socket.current = _socket;

    // cleanup socket on unmount
    return () => {
      socket.current?.close();
    };
  }, []);

  const sendMessage = (position) => {
    socket.current?.readyState === OPEN &&
      socket.current.send(JSON.stringify(position));
  };

  return { sendMessage, list };
};
