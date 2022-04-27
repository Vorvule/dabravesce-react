import React from "react";
import { TopBarsButton } from "./TopBarsButton";
import { TopSocialButtons } from "./TopSocialButtons";
import { TopMiddleButton } from "./TopMiddleButton";
import { TopMiddleLogo } from "./TopMiddleLogo";

export const TopLeftButtons = () => {
  return (
    <>
      <TopBarsButton />
      <TopSocialButtons />
      <TopMiddleButton />
      <TopMiddleLogo />
    </>
  );
};
