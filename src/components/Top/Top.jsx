import React from "react";
import { TopBarsButton } from "./TopBarsButton";
import { TopHomeButton } from "./TopHomeButton";
import { TopOutButtons } from "./TopOutButtons";
import { TopSearchMenu } from "./TopSearchMenu";

export const Top = () => {
  return (
    <div className="w3-top">
      <div className="w3-bar w3-blue-gray w3-left-align">
        <TopHomeButton />
        <TopOutButtons />
        <TopBarsButton />
        <TopSearchMenu />
      </div>
    </div>
  );
};
