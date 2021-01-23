import "./WorkExperience.css";
import Experience from "./Experience";

const WorkExperience = ({ title }) => {
  return (
    <div className='work-experience'>
      <h2>{title}</h2>
      <Experience
        title='Mobile Application Developer'
        company='Appearition Pty Ltd'
        period='01/2016 - 01/2020'
        location='Melbourne'
        description='Appearition is a Research and Development firm that mainly involved in
        emerging technologies such as Augmented and Virtual realities, machine
        learning'
        tasks={[
          "Involve all design, development and research processes and report directly to chief scientist and solution architect",
          "Manage and control app stores deployment processes and maintains back-end systems for mobile apps",
          "Lead QA testing for mobile apps and web based back-end systems",
          "Improved QA processes by developing automated test scripts for back-end web portal",
          "Guide external developers and answer queries about development processes",
          "Provide technical support to internal and external clients, end users and other stakeholders",
        ]}
      />
      <Experience
        title='Software Engineer'
        company='Keystone Solutions'
        period='03/2012 - 09/2012'
        location='Sri Lanka'
        description='At Keystone Solutions, main responsibilities were involving in the
        software development and QA processes'
        tasks={[
          "Analyzed clients and software requirements to determine feasibility of design within a specified time frame.",
          "Designed, developed and tested web application modules using project management and programming techniques to predict and measure process outcome and consequences.",
          "Ensured high-level customer satisfaction by providing answers to client’s queries and resolve technical and nontechnical issues.",
        ]}
      />
      <Experience
        title='Associate Software Engineer (Intern)'
        company='Saberion Pty Ltd'
        period='05/2011 - 02/2012'
        location='Sri Lanka'
        description='At Saberion, the primary tasks were developing web applications using
        PHP and MySQL'
        tasks={[
          "Gathered and analyzed user requirements for clients’ web applications.",
          "Designed, developed and maintained web applications, databases and back-ends for web applications using PHP and MySQL.",
          "Provided suitable solutions for technical queries regarding database and framework selection.",
        ]}
      />
    </div>
  );
};

export default WorkExperience;
