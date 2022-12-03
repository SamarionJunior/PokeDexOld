import "./style.css";

import React from "react";

const alternating = () => {
  const ToggleContent = document.getElementById("ToggleContent")
  const ToggleButton = document.getElementById("ToggleButton")
  if(ToggleContent && ToggleButton){
    if(ToggleContent.style.display !== "none" && ToggleButton.innerText !== "Open"){
      ToggleContent.style.display = "none"
      ToggleButton.innerText = "Open"
    }else if(ToggleContent.style.display !== "flex" && ToggleButton.innerText !== "Close"){
      ToggleContent.style.display = "flex"
      ToggleButton.innerText = "Close"
    }
  }
}

const Toggle = props => (
  <div className="Toggle">
    <button className="ToggleButton" id="ToggleButton" onClick={alternating}>
      Close
    </button>
    <div className="ToggleContent" id="ToggleContent">
      {props.children}
    </div>
  </div>
)

export default Toggle;