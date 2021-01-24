import "./IconData.css";

const IconData = ({ data, icon }) => {
  return (
    <div className='icon-data'>
      <i className={icon}></i>
      <span>{data}</span>
    </div>
  );
};

export default IconData;
