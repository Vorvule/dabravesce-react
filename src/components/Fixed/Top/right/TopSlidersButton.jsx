import React from "react";
import { showOneColumnWithId } from "../../../context/showOneColumnWithId";
import { TopButton } from "../TopButton";

export const TopSlidersButton = () => {
  return (
    <TopButton
      classes="w3-right w3-border-left w3-hide-large"
      title="Парады і Налады"
      handler={() => showOneColumnWithId("RightColumn")}
      fa="fa-sliders"
    />
  );
};
