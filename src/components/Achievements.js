import Achievement from "./Achievement";

const Achievements = () => {
  return (
    <div className='achievements'>
      <h2>Achievements</h2>
      <Achievement
        title='Academic Achievement Award for attaining a GPA of 6.33 out of 7.0 (Master of Information Technology - Overall Results) (2014)'
        description='High Distinction in Programming Principles (Python), System Analysis, Database Systems, Object Modelling, Introduction to Information Technology, Computer Management & Security'
      />
      <Achievement
        title='Academic Achievement Award for attaining a GPA of 6.5
      out of 7.0 (Master of Information Technology - First Year) (2013)'
      />
      <Achievement title='Mahapola Higher Education Scholarship - (Bachelor of Science in Information Technology) (2008 – 2011)' />
    </div>
  );
};

export default Achievements;
