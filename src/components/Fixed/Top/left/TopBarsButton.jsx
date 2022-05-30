import React from "react";

import { FaButton } from "../../FaButton";

export const TopBarsButton = () => {
  const leftCol = { left: true, middle: false, right: false };

  return (
    <FaButton
      fa="fa-bars"
      title="Змест"
      size="w3-xlarge"
      classes="w3-border-right w3-hide-large"
      handler={() => window.setCols(leftCol)}
    />
  );
};
