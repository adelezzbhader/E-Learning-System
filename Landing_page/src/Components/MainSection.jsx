import React from 'react';
import '../mainSection.css'


const MainSection=()=>{

  const clickHandler=('click',()=>{
    window.location.href = "#about";
  })
  

    return(
        <>
        <div className="main-section">
          <img id='img-section1' src='images/way.png'/>

          <p>Let <span>Bastha</span> be your compass on the path to achieving your dreams,turn uncertainty into clarity with Bastaha</p>

          <button  onClick={clickHandler} id="first-btn">
            <span class="box1">
                Learn More!
            </span>
          </button>
        </div>       
        
        </>
    );

} 
export default MainSection;
