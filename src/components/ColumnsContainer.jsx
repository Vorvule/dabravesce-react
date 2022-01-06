import React from "react";
import LeftColumn from "./LeftColumn";
import MiddleColumn from "./MiddleColumn";
import RightColumn from "./RightColumn";

const ColumnsContainer = () => {
  return (
    <div className="w3-container w3-content page-container">
      <div className="w3-row">
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </div>
    </div>
  );
};

export default ColumnsContainer;
