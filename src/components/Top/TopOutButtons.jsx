import React from "react";

const TopOutButtons = () => {
  return (
    <>
      <span
        className="w3-bar-item w3-button w3-right w3-padding-large w3-hover-white w3-theme-d2"
        onClick={() =>
          window.open(
            "https://play.google.com/store/apps/details?id=by.dabravesce"
          )
        }
      >
        <strong>Android</strong>
        <i className="fa fa-android w3-hide-small w3-margin-left"></i>
      </span>
      <span
        className="w3-bar-item w3-button w3-right w3-padding-large w3-hover-white w3-theme-d2"
        onClick={() =>
          window.open("https://github.com/Vorvule/dabravesce-react")
        }
      >
        <strong>Github</strong>
        <i className="fa fa-github w3-hide-small w3-margin-left"></i>
      </span>
    </>
  );
};

export default TopOutButtons;
