import React from "react";
import { FaButton } from "../../FaButton";
import { showOneColumnWithId } from "../../../context/showOneColumnWithId";

export const TopBarsButton = () => {
  return (
    <FaButton
      fa="fa-bars"
      title="Змест"
      size="w3-xlarge"
      classes="w3-border-right w3-hide-large"
      handler={() => showOneColumnWithId("LeftColumn")}
    />
  );
};
