import "./Course.css";

const Course = ({ title, institute, period, location, subjects }) => {
  return (
    <div className='course'>
      <div className='title'>{title}</div>
      <div className='institute'>{institute}</div>
      <div className='flex-row'>
        <div className='period'>{period}</div>
        <div className='location'>{location}</div>
      </div>
      <div className='subjects'>
        <h4>Relevant Subjects</h4>
        <div className='subjects-content'>
          {subjects.map((subject, index) => {
            return (
              <span className='subject' key={index}>
                <span className='primary-color'>&mdash;</span> {subject}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Course;
