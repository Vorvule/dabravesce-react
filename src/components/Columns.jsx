import React from "react";

import { LeftColumn } from "./LeftColumn/LeftColumn";
import { MiddleColumn } from "./MiddleColumn/MiddleColumn";
import { RightColumn } from "./RightColumn/RightColumn";

export const Columns = ({ keys, setKeys }) => {
  return (
    <div className="w3-content page-container">
      <div className="w3-row">
        <LeftColumn />
        <MiddleColumn keys={keys} />
        <RightColumn setKeys={setKeys} />
      </div>
    </div>
  );
};
