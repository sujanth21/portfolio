import React from "react";
import "./Portfolio.css";

import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Education from "./Education";
import Achievements from "./Achievements";
import OtherActivities from "./OtherActivities";

const headerData = {
  fullName: "Sujanth Sebamalaithasan",
  jobTitle: "Web Application Developer",
  summary:
    "A multi-skilled application developer with a proven track record of achieving results in highly competitive environments. Demonstrated ability to innovate, design and develop scalable applications using best practices. Have a blend of multi-disciplinary/cross functional skills in software engineering, system analysis and project management backed by a solid academic track record and experience gained in relevant fields.",
};

const personalInfoData = {
  email: "sujanth1987@gmail.com",
  mobile: "0452087009",
  address: "Reservoir, Australia",
  linkedin: "linkedin.com/in/sujanths",
  github: "github.com/sujanth21",
};

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <Header
        name={headerData.fullName}
        title={headerData.jobTitle}
        summary={headerData.summary}
      />
      <PersonalInfo
        email={personalInfoData.email}
        mobile={personalInfoData.mobile}
        address={personalInfoData.address}
        linkedin={personalInfoData.linkedin}
        github={personalInfoData.github}
      />
      <div className='main-content'>
        <div className='left-content'>
          <WorkExperience title='Work Experience' />
        </div>
        <div className='right-content'>
          <Skills />
          <Education />
          <Achievements />
          <OtherActivities />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
