import React from "react";
import TopBarsButton from "./TopBarsButton";

const Top = () => {
  return (
    <div className="w3-top">
      <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
        <span className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
          <i className="fa fa-home w3-margin-right"></i>
          Дабравесце
        </span>
        <span
          className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
          title="News"
        >
          <i className="fa fa-share-alt"></i>
        </span>
        <span
          className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
          title="Account Settings"
        >
          <i className="fa fa-search"></i>
        </span>
        <TopBarsButton />
      </div>
    </div>
  );
};

export default Top;
