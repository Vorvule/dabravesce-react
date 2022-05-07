import React from "react";

import { TopLeftButtons } from "./left/TopLeftButtons";
import { TopRightButtons } from "./right/TopRightButtons";

export const Top = ({ setKeys}) => {
  return (
    <div className="w3-top">
      <header className="w3-bar w3-blue-gray">
        <TopLeftButtons />
        <TopRightButtons setKeys={setKeys} />
      </header>
    </div>
  );
};
