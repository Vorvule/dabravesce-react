import React from "react";
import { TopBarsButton } from "./TopBarsButton";
import { TopHomeButton } from "./TopHomeButton";
import { TopSearchMenu } from "./TopSearchMenu";
import { TopTabButtons } from "./TopTabButtons";

export const Top = () => {
  return (
    <div className="w3-top">
      <div className="w3-bar w3-blue-gray w3-left-align">
        <TopHomeButton />
        <TopTabButtons />
        <TopBarsButton />
        <TopSearchMenu />
      </div>
    </div>
  );
};
