import React from 'react'
import './css/Button.css'

const Buttons = (props) => {
 
  const animateButton = (e) => {
    // e.preventDefault;
    //reset animation
    e.target.classList.remove("animate");
  
    e.target.classList.add("animate");
    setTimeout(function () {
      e.target.classList.remove("animate");
    }, 1000);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener("click", animateButton, false);
  }
  
  return (
    <div>
<button type= { props.type} style={{backgroundColor:`${props.bg}` , fontSize : `${props.fs}`}} className="bubbly-button m-2">{props.title}</button>
      
    </div>
  )
}

export default Buttons

