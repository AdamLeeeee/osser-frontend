import './index.css';

const Mouse = (props) => {
  const { position } = props;

  return (
    <div
      className='mouse-wrapper'
      id={position.userId}
      style={{
        position: 'absolute',
        top: `${position.y - 8}px`,
        left: `${position.x - 8}px`,
        width: '16px',
        height: '16px',
        borderRadius: '50%'
      }}
    />
  );
};

export default Mouse;
