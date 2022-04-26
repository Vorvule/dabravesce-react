import React from "react";
import { TopAsideButton } from "./TopAsideButton";
import { TopLeftButtons } from "./TopLeftButtons";
import { TopRightButtons } from "./TopRightButtons";
// import { TopSearchMenu } from "./TopSearchMenu";

export const Top = () => {
  return (
    <div className="w3-top">
      <div className="w3-bar w3-blue-gray w3-left-align">
        <TopAsideButton />
        <TopLeftButtons />
        {/* <TopSearchMenu /> */}
        <TopRightButtons />
      </div>
    </div>
  );
};
