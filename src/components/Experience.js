import "./Experience.css";

const Experience = ({
  title,
  company,
  period,
  location,
  description,
  tasks,
}) => {
  return (
    <div className='experience'>
      <div className='title'>{title}</div>
      <div className='company'>{company}</div>
      <div className='flex-row'>
        <div className='period'>{period}</div>
        <div className='location'>{location}</div>
      </div>
      <div className='description'>{description}</div>
      <div className='achievements'>
        <h4>Achievements/Tasks</h4>
        <div className='tasks'>
          {tasks.map((task, index) => {
            return (
              <div className='task' key={index}>
                <span className='primary-color'>&mdash;</span> {task}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
