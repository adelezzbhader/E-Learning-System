import React from 'react';
import { FaSearch } from "react-icons/fa";
import '../App.css'
import { FaHome } from "react-icons/fa";
import { MdPlayLesson } from "react-icons/md";
import { LuBellRing } from "react-icons/lu";
import { FcAbout } from "react-icons/fc";
import { RiContactsFill } from "react-icons/ri";
import { MdHelpOutline } from "react-icons/md";
import { FaServicestack } from "react-icons/fa6";
import About from './About'
import Courses from './Courses'
import Footer from './Footer'
import Services from './Services'
import AOS from 'aos';

const Header1=()=>{


    return (

        <>
            <header className='container' data-aos="fade-up" data-aos-offset="500" data-aos-delay="500" data-aos-duration="2000">
               
                <img className="logo" src="images/nlogo.png" alt="" srcset=""/>
              <div className="navs">

                  <nav id="first-nav">
                       <ul>
                          
                          <li><a href="#"><FaHome className="icons"/> Home</a></li>
                          <li><a onClick={<Courses/>} href="#Courses"> <MdPlayLesson className="icons" />Cources</a></li>
                          <li><a onClick={<About/>} href="#about"><FcAbout className="icons"/> About</a></li>
                          <li><a onClick={<Footer/>} href="#Footer"><RiContactsFill className="icons"/> Contact</a></li>
                          <li><a onClick={<Services/>} href="#Services"><FaServicestack className="icons"/> Services</a></li>
                       </ul>
                  </nav>
              </div>

             <div className='serach_ring'>

              <div className="box-search">
                   <input type="text" placeholder="Search..."/>
                    <FaSearch className="icons"/>
               </div>
             </div>


             <div className="profile">
                <img id='img-profile' src="https://i.pravatar.cc/150" alt="Profile Pic"/>
                <span>  John Doe</span>
             </div>
           </header>
        </>
    );
}

export default Header1;