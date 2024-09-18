import React from 'react';
import 'animate.css';
import { GiStrong, GiGraduateCap, GiSkills, GiMagnifyingGlass } from "react-icons/gi"; // New Icons
import { FaRegSmileWink, FaHandsHelping, FaBookReader, FaLaptopCode } from 'react-icons/fa'; // Fun Icons
import { IoRocketSharp } from 'react-icons/io5'; // Rocket Icon for Excitement

function StartPage() {
  return (
    <div id="startpage" className="flex flex-col items-center justify-center ml-[350px] bg-gradient-to-b from-gray-100 to-blue-50 p-4 relative">

      {/* Background Illustration (Optional) */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/background-pattern.png')] bg-cover bg-center"></div>

      {/* Header Section */}
      <div className="text-center mb-8 z-10">
        <h1 className="text-6xl font-extrabold text-blue-800 mb-4 flex justify-center items-center gap-3 animate__animated animate__fadeInDown">
          Let's Start <GiStrong className="text-6xl text-yellow-500 animate__animated animate__tada" aria-label="Strong Icon" />
        </h1>
        <p className="text-xl text-gray-700 mb-6 font-medium animate__animated animate__fadeInUp">
          Whether you're a beginner or already have experience, we have something for you!
        </p>
      </div>

      {/* Main Content Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mt-8 w-full max-w-4xl gap-8 lg:gap-0 z-10">

        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2 flex justify-center animate__animated animate__fadeInLeft">
          <img
            src="images/learning.jpg"  // Replace with a suitable image
            alt="Learning Journey"
            className="w-3/4 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:rotate-1 cursor-pointer"
          />
        </div>

        {/* Right Section - Buttons & Info */}
        <div className="w-full lg:w-1/2 flex flex-col items-center gap-6">

        {/* ___________________________first Butoon__________________________   */ }
          
          {/* Beginner Button */}
          <button className="relative flex w-[200px] h-[60px] items-center px-6 py-3 overflow-hidden font-semibold transition-all bg-indigo-500 rounded-lg group shadow-lg hover:bg-indigo-600 animate__animated animate__bounceIn">
            <span className="absolute inset-0 w-full h-full transition-transform bg-indigo-600 rounded-lg group-hover:translate-x-full group-hover:animate-pulse"></span>
            <span className="relative z-10 text-white text-lg flex items-center gap-2 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
              <GiGraduateCap className="text-2xl" aria-label="Graduation Cap Icon" /> Beginner
            </span>
          </button>

          {/* ___________________________Second Butoon__________________________   */ }

          {/* Experienced Button */}
          <button className="relative flex w-[200px] h-[60px] items-center px-6 py-3 overflow-hidden font-semibold transition-all bg-green-500 rounded-lg group shadow-lg hover:bg-green-600 animate__animated animate__bounceIn">
            <span className="absolute inset-0 w-full h-full transition-transform bg-green-600 rounded-lg group-hover:translate-x-full group-hover:animate-pulse"></span>
            <span className="relative z-10 text-white text-lg flex items-center gap-2 transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3">
              <GiSkills className="text-2xl" aria-label="Skills Icon" /> Have Experience
            </span>
          </button>

          {/* Fun Icon Section */}
          <div className="text-center mt-4">
            <FaRegSmileWink className="text-4xl text-yellow-500 animate__animated animate__bounceIn" aria-label="Wink Icon" />
            <p className="text-lg text-gray-600 mt-2">Excited to start? Choose your path!</p>
          </div>
        </div>
      </div>

      
      <div className="mt-12 flex justify-around w-full max-w-4xl text-blue-600">
        <div className="flex flex-col items-center">
          <FaHandsHelping className="text-4xl animate__animated animate__fadeInUp" aria-label="Helping Hands Icon" />
          <p className="text-lg font-medium mt-2">Guided Learning</p>
        </div>
        <div className="flex flex-col items-center">
          <FaBookReader className="text-4xl animate__animated animate__fadeInUp" aria-label="Book Reader Icon" />
          <p className="text-lg font-medium mt-2">Comprehensive Materials</p>
        </div>
        <div className="flex flex-col items-center">
          <FaLaptopCode className="text-4xl animate__animated animate__fadeInUp" aria-label="Laptop Code Icon" />
          <p className="text-lg font-medium mt-2">Hands-on Projects</p>
        </div>
        <div className="flex flex-col items-center">
          <IoRocketSharp className="text-4xl animate__animated animate__fadeInUp" aria-label="Rocket Icon" />
          <p className="text-lg font-medium mt-2">Career Boost</p>
        </div>
      </div>

      
      <footer className="mt-16 text-center text-gray-600 z-10">
        <p>&copy; 2024 Basatha | Empowering Your Learning Journey</p>
      </footer>
    </div>
  );
}

export default StartPage;




