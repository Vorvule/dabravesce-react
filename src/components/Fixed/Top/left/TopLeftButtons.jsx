import React from "react";
import { TopBarsButton } from "./TopBarsButton";
import { TopPromotion } from "./TopPromotion";
import { TopMiddleButton } from "./TopMiddleButton";
import { TopMiddleLogo } from "./TopMiddleLogo";

export const TopLeftButtons = () => {
  return (
    <>
      <TopBarsButton />
      <TopPromotion />
      <TopMiddleButton />
      <TopMiddleLogo />
    </>
  );
};
