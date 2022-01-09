import React from "react";

const TopBarsButton = () => {
  return (
    <span
      className="w3-bar-item w3-button w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
      onClick={handleBarsButtonClick}
    >
      <i className="fa fa-bars"></i>
    </span>
  );
};

const handleBarsButtonClick = () => {
  console.log('bars button click')
  document.getElementById("LeftColumn").classList.toggle("w3-hide-small")
  document.getElementById("LeftColumn").classList.toggle("w3-hide-medium")
  document.getElementById("MiddleColumn").classList.toggle("w3-hide")

}

export default TopBarsButton;
