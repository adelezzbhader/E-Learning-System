import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Header1 from './Components/Header1';
import MainSection from './Components/MainSection';
import About from './Components/About';
import Courses from './Components/Courses';
import Loading from './Components/Loading';


function MainContent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/loading');
  };

  return (
    <>
      <Header1 />
      <MainSection />
      <About />
      <Courses />

      <div onClick={handleClick} className="button">
        <div className="box">B</div>
        <div className="box">E</div>
        <div className="box">G</div>
        <div className="box">I</div>
        <div className="box">N</div>
      </div>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="*" element={<Loading />} /> {/* For testing all routes */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
