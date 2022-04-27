import React from "react";

const FooterSearch = () => {
  return (
    <div className="w3-large w3-hide">
      <input className="" id="FooterSearch" placeholder="Пошук"></input>
      <button className="w3-button">
        <i className="fa fa-search"></i>
      </button>
    </div>
  );
};

export { FooterSearch };
