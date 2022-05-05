import React from "react";

import { FaButton } from "../../FaButton";
import { Mobile } from "../../../Common/Mobile";

export const TopSlidersButton = () => {
  return (
    <FaButton
      classes="w3-right w3-border-left w3-hide-large"
      size="w3-xlarge"
      title="Парады і Налады"
      handler={() => Mobile.showOneColumnWithId("RightColumn")}
      fa="fa-sliders"
    />
  );
};
