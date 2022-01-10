import React from "react";
import TopBarsButton from "./TopBarsButton";
import TopHomeButton from "./TopHomeButton";
import TopTabButtons from "./TopTabButtons";

const Top = () => {
  return (
    <div className="w3-top">
      <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
        <TopHomeButton />
        <TopTabButtons />
        <TopBarsButton />
      </div>
    </div>
  );
};

export default Top;
