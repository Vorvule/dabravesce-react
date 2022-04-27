import React from "react";
import { TopButton } from "../TopButton";
import { showCore } from "../../MiddleColumn/core/showCore"

export const TopHomeButton = () => {
  return (
    <TopButton
      addedClasses="w3-right w3-border-left w3-hide-medium w3-hide-small"
      title="У пачатак"
      clickHandler={() => showCore(0, 0, 0)}
      fa="fa-home"
    />
  );
};
