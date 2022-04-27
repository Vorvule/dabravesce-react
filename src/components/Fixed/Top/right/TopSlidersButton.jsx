import React from "react";
import { showOneColumnWithId } from "../../../context/showOneColumnWithId";
import { FaButton } from "../../FaButton";

export const TopSlidersButton = () => {
  return (
    <FaButton
      classes="w3-right w3-border-left w3-hide-large"
      size="w3-xlarge"
      title="Парады і Налады"
      handler={() => showOneColumnWithId("RightColumn")}
      fa="fa-sliders"
    />
  );
};
