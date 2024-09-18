import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Header1 from './Components/Header1';
import MainSection from './Components/MainSection';
import About from './Components/About';
import Courses from './Components/Courses';
import Loading from './Components/Loading';
import 'aos/dist/aos.css';
import Aos from 'aos';
import Footer from './Components/Footer';
import Services from './Components/Services';
import Startpage from './Components/Startpage.jsx'
// import  './media.css'

function MainContent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/loading');
  };

  useEffect(() => {
    Aos.init({
      duration: 1000, 
      easing: 'ease-out',
      once: true, 
    });
  }); 

  const timer=()=>{
    setTimeout(() => {
      document.getElementById('loading').style.display = 'none';
    }, 2000);
  }

  return (
    <>
      <Header1 />
      <MainSection />
      <About />
      <Courses />
      <Services />
      
      <div onClick={handleClick} className="button">
        <div className="box">B</div>
        <div className="box">E</div>
        <div className="box">G</div>
        <div className="box">I</div>
        <div className="box">N</div>
      </div>

      <Footer />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/startpage" element={<Startpage />} />
      </Routes>
    </BrowserRouter>

    
  );
}

export default App;

