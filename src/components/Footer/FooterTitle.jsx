import React from "react";

const FooterTitle = () => {
  const android = "https://play.google.com/store/apps/details?id=by.dabravesce";
  const github = "https://github.com/Vorvule/dabravesce-react";

  return (
    <div className="w3-center footer-tab">
      <span
        className="w3-large w3-padding"
        title="Мабільная версія"
        onClick={() => window.open(android)}
      >
        <i className="fa fa-android w3-margin"></i>
        <strong className="w3-hide-small">Android</strong>
      </span>
      <span
        className="w3-large w3-padding"
        title="Рэпазіторый на Gihub"
        onClick={() => window.open(github)}
      >
        <i className="fa fa-github w3-margin"></i>
        <strong className="w3-hide-small">Github</strong>
      </span>
    </div>
  );
};

export default FooterTitle;
