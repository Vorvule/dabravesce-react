import React from "react";
import { TopButton } from "../TopButton";
import { showCore } from "../../MiddleColumn/core/showCore"

export const TopHomeButton = () => {
  return (
    <TopButton
      fa="fa-home"
      title="У пачатак"
      handler={() => showCore(0, 0, 0)}
      classes="w3-right w3-border-left w3-hide-medium w3-hide-small"
    />
  );
};
