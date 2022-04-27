import React from "react";
import { TopButton } from "../TopButton";
import { showOneColumnWithId } from "../../context/showOneColumnWithId";

export const TopBarsButton = () => {
  return (
    <TopButton
      addedClasses="w3-border-right w3-hide-large"
      title="Змест"
      clickHandler={() => showOneColumnWithId("LeftColumn")}
      fa="fa-bars"
    />
  );
};
