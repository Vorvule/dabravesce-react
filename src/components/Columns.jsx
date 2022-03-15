import React from "react";
import { LeftColumn } from "./LeftColumn";
import { MiddleColumn } from "./MiddleColumn";
import { RightColumn } from "./RightColumn";

export const Columns = () => {
  return (
    <div className="w3-content page-container">
      <div className="w3-row">
        <LeftColumn />
        <MiddleColumn />
        <RightColumn />
      </div>
    </div>
  );
};
