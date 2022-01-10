import React from "react";
import TopBarsButton from "./Top/TopBarsButton";
import TopTabButtons from "./Top/TopTabButtons";

const Top = () => {
  return (
    <div className="w3-top">
      <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
        <span className="w3-bar-item w3-button w3-padding-large w3-theme-d4" title="Хатняя">
          <i className="fa fa-home w3-margin-right"></i>
          Дабравесце
        </span>
        <TopTabButtons />
        <TopBarsButton />
      </div>
    </div>
  );
};

export default Top;
