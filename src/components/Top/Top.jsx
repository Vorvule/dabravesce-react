import React from "react";
import { TopLeftButtons } from "./left/TopLeftButtons";
import { TopRightButtons } from "./right/TopRightButtons";

export const Top = () => {
  return (
    <div className="w3-top">
      <div className="w3-bar w3-blue-gray w3-left-align">
        <TopLeftButtons />
        <TopRightButtons />
      </div>
    </div>
  );
};
