import React from 'react';
import '../mainSection.css'


const MainSection=()=>{

  const clickHandler=('click',()=>{
    window.location.href = "#about";
    
  })
  

    return(
        <>
        <div className="container">

         <div className="main-section" data-aos="fade-up">
          <img id='img-section1' src='images/way.png' data-aos="fade-up" />

          <p data-aos="fade-left">Let <span>Bastha</span> be your compass on the path to achieving your dreams,turn uncertainty into clarity with Bastaha</p>

          <button  onClick={clickHandler} data-aos="zoom-in"   id="first-btn">
            <span className="box1">
                Learn More!
            </span>
          </button>
         </div>       
        

        </div>
       
        </>
    );

} 
export default MainSection;
