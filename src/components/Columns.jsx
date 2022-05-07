import React from "react";

import { LeftColumn } from "./LeftColumn/LeftColumn";
import { MiddleColumn } from "./MiddleColumn/MiddleColumn";
import { RightColumn } from "./RightColumn/RightColumn";

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
