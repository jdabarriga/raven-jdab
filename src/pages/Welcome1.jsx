import { Link } from "react-router-dom";
import ravenLogo from "../assets/raven-logo.png";

const Welcome = () => {
  return (
    <div className='text-white flex flex-col md:flex-row justify-center items-center text-center mt-4'>
      <div className="md:w-1/3 p-4">
        <h1 className='text-6xl md:text-8xl font-extrabold underline' style={{ fontFamily: 'Consolas' }}>WELCOME</h1>
        <p className='text-5xl md:text-7xl font-extrabold' style={{ fontFamily: 'Consolas' }}>TO</p>
        <p className='text-5xl md:text-7xl font-extrabold underline' style={{ fontFamily: 'Consolas' }}>RAVEN</p>
        <p className="mt-10">2024 UNCO Properties Raven Inc.</p>
        <Link to="/Home">
          <button className="w-40 h-12 mt-10 bg-black rounded-2xl hover:border-[#646cff] border-[#2f315f] border-4 outline-none focus:outline-none focus:ring-4 focus:ring-[#646cff] transition ease-in duration-200">
            <span className="text-xl font-bold text-[#646cff]" style={{ fontFamily: 'Consolas' }}>Proceed</span>
          </button>
        </Link>
      </div>
      <div className="md:w-2/3 mt-10 md:mt-0 p-4">
        <img className="max-w-full h-auto" src={ravenLogo} alt="Raven Logo" />
      </div>
    </div>
  );
};

export default Welcome;
