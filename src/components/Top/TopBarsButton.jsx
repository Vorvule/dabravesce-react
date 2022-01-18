import React from "react";
import { getWindowWidth } from "./get_window_width";
import { toggleShowCore } from "../Common/toggle_show_core";

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
  toggleShowCore();

  if (getWindowWidth() < 993) {
    document
      .getElementById("LeftColumn_Content")
      .classList.remove("w3-margin-right");
  }
};

export default TopBarsButton;
