const Sports = ({ club, description }) => {
  return (
    <div className='sports'>
      <div className='club'>{club}</div>
      <div className='description'>{description}</div>
    </div>
  );
};

export default Sports;
