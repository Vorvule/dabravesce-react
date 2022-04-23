import React from "react";

export const TopOutButtons = () => {
  const android = "https://play.google.com/store/apps/details?id=by.dabravesce";
  const github = "https://github.com/Vorvule/dabravesce-react";

  return (
    <>
      <span
        className="w3-bar-item w3-large w3-padding-large"
        title="Дачыненне на Android"
        onClick={() => window.open(android)}
      >
        <i className="fa fa-android" aria-hidden="true"></i>
        <strong className="w3-hide-medium w3-hide-small w3-margin-left">
          Android
        </strong>
      </span>

      <span
        className="w3-bar-item w3-large w3-padding-large"
        title="Рэпазіторый на Gihub"
        onClick={() => window.open(github)}
      >
        <i className="fa fa-github" aria-hidden="true"></i>
        <strong className="w3-hide-medium w3-hide-small w3-margin-left">
          Github
        </strong>
      </span>
    </>
  );
};
