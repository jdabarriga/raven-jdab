import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import '../Welcome.css'; // Assuming you will create a separate CSS file for styles
import ravenLogo from '../assets/raven-logo.png'; // Adjust the path to where your image is located


const Welcome = () => {
  useEffect(() => {
    // Add any initialization logic or effects here
  }, []);

  return (
    <div className='welcome-container'>
      <div className="text-center">
        <h1 className='welcome-title'>RAVEN</h1>
        <p className='welcome-title'>TECHNOLOGY</p>
        <p className='welcome-subtitle'>LLC.</p>
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
