import { useRef } from 'react';

export const useWebSocket = (id) => {
  // TODO: 连接路径去掉 /websocket，直接通过 ws://localhost:8080/{id} 连接
  const socket = useRef(new WebSocket(`ws://localhost:8080/websocket/${id}`));

  socket.current.addEventListener('open', () => {
    socket.send('Hello Server!');
  });

  socket.current.addEventListener('message', (event) => {
    // eslint-disable-next-line no-console
    console.log('Message from server ', event.data);
  });

  const sendMessage = (position) => {
    // TODO: 后端接收到的数据是字符串，需要转换成 JSON
    socket.current.send(JSON.stringify(position));
  };

  // TODO: 关闭页面时，关闭 socket

  return { socket, sendMessage };
};
