import React from "react";
import { TopButton } from "../TopButton";
import { showOneColumnWithId } from "../../context/showOneColumnWithId";

export const TopBarsButton = () => {
  return (
    <TopButton
      fa="fa-bars"
      title="Змест"
      classes="w3-border-right w3-hide-large"
      handler={() => showOneColumnWithId("LeftColumn")}
    />
  );
};
