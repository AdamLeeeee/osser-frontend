import './index.css';

const Mouse = ({ position }) => {
  const { userId, x, y } = position;

  return (
    <div className='mouse-wrapper' id={userId} style={{ left: x, top: y }} />
  );
};

export default Mouse;
