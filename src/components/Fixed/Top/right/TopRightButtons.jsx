import React from "react";

import { TopSlidersButton } from "./TopSlidersButton";
import { TopHomeButton } from "./TopHomeButton";

export const TopRightButtons = ({ setKeys}) => {
  return (
    <>
      <TopHomeButton setKeys={setKeys} />
      <TopSlidersButton />
    </>
  );
};
