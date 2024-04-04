import { Link } from 'react-router-dom';
import './Welcome.css';
import ravenLogo from '../assets/raven-logo.png';


const Welcome = () => {
  return (
    <div className='welcome-container'>
      <div className="text-center">
        <h1 className='welcome-title'>Raven Technology Inc.</h1>
        <p className="welcome-description">2024 UNCO Properties</p>
        <button className="welcome-button">
          <Link className="welcome-link" to="/Home">Press Start</Link>
        </button>
      </div>
      <div>
        <img className="welcome-logo" src={ravenLogo} alt="Raven Logo" />
      </div>
    </div>
  );
};

export default Welcome;
