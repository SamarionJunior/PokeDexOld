import "./style.css";

import React from "react";

const close = () => {
  const slider = document.getElementById("Scroll")
  slider.scrollLeft = slider.scrollLeft - 100
}

const open = () => {
  const slider = document.getElementById("ToggleContent")
  // slider.style.display = "none"
  if(slider){
    console.log(slider.style)
  }
}

const Toggle = props => (
  <div className="Toggle">
    <button className="ToggleButton" id="ToggleButton" onClick={open()}>
      button
    </button>
    <div className="ToggleContent" id="ToggleContent">
      {props.children}
    </div>
  </div>
)

export default Toggle;