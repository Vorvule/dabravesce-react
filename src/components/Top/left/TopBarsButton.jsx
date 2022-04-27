import React from "react";
import { TopButton } from "../TopButton";

import { toggleShowCore } from "../../context/toggleShowCore";

export const TopBarsButton = () => {
  return (
    <TopButton
      addedClasses="w3-border-right w3-hide-large"
      title="Змест"
      clickHandler={toggleShowCore}
      fa="fa-bars"
    />
  );
};
