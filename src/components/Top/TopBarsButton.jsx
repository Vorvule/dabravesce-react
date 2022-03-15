import React from "react";
import { toggleShowCore } from "../Common/toggle_show_core";

const TopBarsButton = () => {
  return (
    <span
      className="w3-bar-item w3-large w3-padding-large w3-right w3-hide-large"
      onClick={handleBarsButtonClick}
    >
      <i className="fa fa-bars"></i>
    </span>
  );
};

const handleBarsButtonClick = () => {
  toggleShowCore();

  if (window.innerWidth < 993) {
    document
      .getElementById("LeftColumn_Content")
      .classList.remove("w3-margin-right");
  }
};

export { TopBarsButton };
