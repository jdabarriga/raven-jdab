import { Route, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Home from '../src/pages/Home';
import { ThemeProvider } from './theme/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div className="flex justify-center items-center p-8 h-screen bg-transparent w-full">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
};

export default App;