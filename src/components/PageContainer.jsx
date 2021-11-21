import React from "react";
import LeftColumn from "./LeftColumn";
import MiddleColumn from "./MiddleColumn";
import RightColumn from "./RightColumn";

const PageContainer = () => {
  return (
    <div
      className="w3-container w3-content"
      style={{ maxWidth: "1400", marginTop: "80" }}
    >
      <div className="w3-row">
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </div>
    </div>
  );
};

export default PageContainer;
