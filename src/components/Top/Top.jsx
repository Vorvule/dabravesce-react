import React from "react";
import TopBarsButton from "./TopBarsButton";
import TopHomeButton from "./TopHomeButton";
import TopOutButtons from "./TopOutButtons";
import TopTabButtons from "./TopTabButtons";

const Top = () => {
  return (
    <div className="w3-top">
      <div className="w3-bar w3-theme-d2 w3-left-align">
        {/* <TopHomeButton /> */}
        <TopTabButtons />
        <TopBarsButton />
        <TopOutButtons />
      </div>
    </div>
  );
};

export default Top;
