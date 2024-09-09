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

const Header1=()=>{

    return (

        <>
            <header>
               <h3>Bastaha</h3>
               <div class="navs">

                  <nav id="first-nav">
                       <ul>
                          
                          <li><a href="#"><FaHome className="icons"/> Home</a></li>
                          <li><a href="#"> <MdPlayLesson className="icons" />Cources</a></li>
                       </ul>
                  </nav>
    
                    <nav id="second-nav">
                         <ul>
                            
                             <li><a onClick={<About/>} href="#about"><FcAbout className="icons"/> About</a></li>
                             <li><a href="#"><RiContactsFill className="icons"/> Contact</a></li>
                             <li><a href="#"><FaServicestack className="icons"/> Services</a></li>
                         </ul>
                    </nav>
               </div>

             <div className='serach_ring'>

              <div class="box-search">
                   <input type="text" placeholder="Search..."/>
                    <FaSearch className="icons"/>
               </div>
               <LuBellRing className="icons" id='ring'/>
               <MdHelpOutline className="icons"/>
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