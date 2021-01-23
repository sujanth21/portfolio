const Achievement = ({ title, description }) => {
  return (
    <div className='achievement-content'>
      <div className='achievement'>{title}</div>
      <div className='description'>{description}</div>
    </div>
  );
};

export default Achievement;
