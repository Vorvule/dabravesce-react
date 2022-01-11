import React from "react";

const TopOutButtons = () => {
  return (
    <>
      <span
        className="w3-bar-item w3-button w3-right w3-padding-large w3-hover-white w3-theme-d2 w3-large"
        onClick={() =>
          window.open(
            "https://play.google.com/store/apps/details?id=by.dabravesce"
          )
        }
      >
        <strong className="w3-hide-medium w3-hide-small w3-margin-right">
          Android
        </strong>
        <i className="fa fa-android"></i>
      </span>
      <span
        className="w3-bar-item w3-button w3-right w3-padding-large w3-hover-white w3-theme-d2 w3-large"
        onClick={() =>
          window.open("https://github.com/Vorvule/dabravesce-react")
        }
      >
        <strong className="w3-hide-medium w3-hide-small w3-margin-right">
          Github
        </strong>
        <i className="fa fa-github"></i>
      </span>
    </>
  );
};

export default TopOutButtons;
