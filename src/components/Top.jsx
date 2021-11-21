import React from "react";

const Top = () => {
  return (
    <div className="w3-top">
      <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
        <span className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2">
          <i className="fa fa-bars"></i>
        </span>
        <span className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
          <i className="fa fa-home w3-margin-right"></i>Logo
        </span>
        <span
          className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
          title="News"
        >
          <i className="fa fa-globe"></i>
        </span>
        <span
          className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
          title="Account Settings"
        >
          <i className="fa fa-user"></i>
        </span>
        <span
          className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
          title="Messages"
        >
          <i className="fa fa-envelope"></i>
        </span>
        <span
          className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white"
          title="My Account"
        ></span>
      </div>
    </div>
  );
};

export default Top;
