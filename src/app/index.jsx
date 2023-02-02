import { useRef } from 'react';
import { nanoid } from 'nanoid';

import './index.css';
import { useWebSocket } from '../hooks';

// generate id for client
const id = nanoid();

const App = () => {
  const wrapperRef = useRef(null);
  // mouse position
  const positionRef = useRef({ x: -9999, y: -9999 });

  const { sendMessage } = useWebSocket(id);

  const handleMouseMove = (e) => {
    if (wrapperRef.current) {
      const { x, y } = wrapperRef.current.getBoundingClientRect();
      const nextPosition = { x: e.clientX - x, y: e.clientY - y };
      // update mouse position
      positionRef.current = nextPosition;
      wrapperRef.current.style.setProperty('--x', String(nextPosition.x));
      wrapperRef.current.style.setProperty('--y', String(nextPosition.y));
      const message = {
        userId: id,
        x: positionRef.current.x,
        y: positionRef.current.y
      };
      sendMessage(JSON.stringify(message));
    }
  };

  return (
    <div className='wrapper' ref={wrapperRef} onMouseMove={handleMouseMove} />
  );
};

export default App;
