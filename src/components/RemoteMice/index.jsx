// eslint-disable-next-line react/prop-types
const SingleRemoteMouse = ({ position }) => {
  // eslint-disable-next-line react/prop-types
  const { userId, x, y } = position;
  return (
    <button
      id={userId}
      style={{
        position: 'absolute',
        marginTop: `${y - 8}px`,
        marginLeft: `${x - 8}px`,
        width: '16px',
        height: '16px',
        borderRadius: '20px'
      }}
    />
  );
};

const RemoteMice = ({ positionList }) => {
  const result = JSON.parse(positionList).map((item) => (
    <SingleRemoteMouse position={item} key={item.userId} />
  ));
  return result;
};

export default RemoteMice;
