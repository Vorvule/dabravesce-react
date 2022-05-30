import React from "react";

import { FaButton } from "../../FaButton";

export const TopSlidersButton = () => {
  const rightCol = { left: false, middle: false, right: true };

  return (
    <FaButton
      classes="w3-right w3-border-left w3-hide-large"
      title="Парады і Налады"
      size="w3-xlarge"
      fa="fa-sliders"
      handler={() => window.setCols(rightCol)}
    />
  );
};
