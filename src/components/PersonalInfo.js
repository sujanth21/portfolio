import "./PersonalInfo.css";
import IconData from "./IconData";

const PersonalInfo = ({ email, mobile, address, linkedin, github }) => {
  return (
    <div className='personal-info'>
      <div className='line'></div>
      <div className='content'>
        <div className='email'>
          <IconData data={email} icon='fas fa-envelope' />
        </div>
        <div className='mobile'>
          <IconData data={mobile} icon='fas fa-mobile-alt' />
        </div>
        <div className='address'>
          <IconData data={address} icon='fas fa-map-marker-alt' />
        </div>
        <div className='linkedin'>
          <a href='https://linkedin.com/in/sujanths'>
            <IconData data={linkedin} icon='fab fa-linkedin-in' />
          </a>
        </div>
        <div className='github'>
          <a href='https://github.com/sujanth21'>
            <IconData data={github} icon='fab fa-github' />
          </a>
        </div>
      </div>
      <div className='line'></div>
    </div>
  );
};

export default PersonalInfo;
