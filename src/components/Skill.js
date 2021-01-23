import "./Skill.css";

const Skill = ({ name }) => {
  return (
    <span className='skill'>
      <span className='skill-content'>{name}</span>
    </span>
  );
};

export default Skill;
