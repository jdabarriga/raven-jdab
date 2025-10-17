import { Link } from 'react-router-dom';
import './Welcome.css';
import ravenLogo from '../assets/raven-logo.png';
import ThemeSwitcher from '../components/ThemeSwitcher';

const Welcome = () => {
  return (
    <div className='welcome-container'>
      {/* Theme Switcher */}
      <ThemeSwitcher />
      
      {/* Main Content */}
      <div className="welcome-content">
        {/* Title Section */}
        <div className="welcome-header">
          <h1 className='welcome-title'>
            <span className="welcome-title-top">WELCOME TO</span>
            <br />
            <span className="welcome-title-raven">RAVEN</span>
          </h1>
          <p className="welcome-subtitle">2024 UNCO Properties Raven Inc.</p>
        </div>

        {/* Raven Logo */}
        <div className="welcome-logo-container">
          <div className="welcome-logo-circle">
            <img className="welcome-logo" src={ravenLogo} alt="Raven Logo" />
          </div>
        </div>
      </div>

      {/* Continue Button */}
      <Link className="welcome-link" to="/Home">
        <button className="welcome-button">Continue</button>
      </Link>
    </div>
  );
};

export default Welcome;
