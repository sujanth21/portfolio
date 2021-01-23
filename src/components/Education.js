import "./Education.css";
import Course from "./Course";

const Education = () => {
  return (
    <div className='education'>
      <h2>Education</h2>
      <div className='content'>
        <Course
          title='Master of Information Technology (System Analysis)'
          institute='Charles Sturt University'
          period='02/2013 - 12/2014'
          location='Melbourne'
          subjects={[
            "Programming Principles (Python)",
            "System Analysis and Designs",
            "Object Modelling",
            "Web Based Information System (JSP & Servlets)",
          ]}
        />
        <Course
          title='Bachelor of Science in Information Technology'
          institute='University of Moratuwa'
          period='07/2008 - 11/2011'
          location='Sri Lanka'
          subjects={[
            "Object Oriented Programming (Java)",
            "Web Technologies",
            "Software Engineering",
            "Project Management & Quality Assurance",
          ]}
        />
      </div>
    </div>
  );
};

export default Education;
