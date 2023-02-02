import { useEffect, useRef, useState } from 'react';

// websocket readyState open constants
const OPEN = 1;

const throttled = (fn, delay) => {
  let timer = null;
  let prevTime = Date.now();
  return (...args) => {
    let currentTime = Date.now();
    let remaining = delay - (currentTime - prevTime);
    clearTimeout(timer);
    if (remaining <= 0) {
      fn.apply(this, args);
      prevTime = currentTime;
    } else {
      timer = setTimeout(fn, remaining);
    }
  };
};

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

  return { sendMessage: throttled(sendMessage, 100), list };
};
