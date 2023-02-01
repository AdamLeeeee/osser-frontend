import { useRef } from 'react';
import { useWS } from '~/app/components/localMouse/services/useWS.js';

const LocalMouse = () => {
  const wrapperRef = useRef(null);
  // mouse position
  const positionRef = useRef({ x: -9999, y: -9999 });

  useWS();

  const handleMouseMove = (e) => {
    if (wrapperRef.current) {
      const { x, y } = wrapperRef.current.getBoundingClientRect();
      const nextPosition = { x: e.clientX - x, y: e.clientY - y };
      // update mouse position
      positionRef.current = nextPosition;
      wrapperRef.current.style.setProperty('--x', String(nextPosition.x));
      wrapperRef.current.style.setProperty('--y', String(nextPosition.y));
    }
  };

  return (
    <div className='wrapper' ref={wrapperRef} onMouseMove={handleMouseMove} />
  );
};

export default LocalMouse;
