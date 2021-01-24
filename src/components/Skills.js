import "./Skills.css";
import Skill from "./Skill";

const skills = [
  "JavaScript",
  "React JS",
  "Node JS",
  "MongoDB",
  "Express",
  "Mobile App Development",
  "Deployment",
  "Jest",
  "REST API Development",
];

const Skills = () => {
  return (
    <div className='skills'>
      <h2>Skills</h2>
      <div className='skills-container'>
        {skills.map((skill, index) => {
          return <Skill name={skill} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Skills;
