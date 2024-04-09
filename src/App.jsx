import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/welcome';
import Home from '../src/pages/Home';

const App = () => {
  return (
    <div className="flex justify-center items-center p-8 h-screen bg-transparent w-full">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;