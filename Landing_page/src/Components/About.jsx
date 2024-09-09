import React from 'react';
import '../about.css'
import { BsQuestionOctagon } from "react-icons/bs";

function About() {
    return ( 
        <>
           <div className="about-page" id="about">

               <h1>About Basatha <BsQuestionOctagon className='iconss'/></h1>

                <p>Our website is designed to guide beginners in entering the software field. Whether you're new to programming or looking to enhance your skills, we provide essential resources, tutorials, and practical projects. With step-by-step learning paths, we make it easy for anyone to start their journey into the tech industry.
                </p>

                <img src='./images/about.png'/>

           </div>

        
        
        </>
     );
}

export default About;