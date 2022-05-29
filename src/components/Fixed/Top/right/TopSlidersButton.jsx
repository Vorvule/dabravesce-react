import React from "react";

import { FaButton } from "../../FaButton";
import { Cols } from "../../../Common/Cols";

export const TopSlidersButton = () => {
  return (
    <FaButton
      classes="w3-right w3-border-left w3-hide-large"
      size="w3-xlarge"
      title="Парады і Налады"
      handler={() => Cols.showColumnById("RightColumn")}
      fa="fa-sliders"
    />
  );
};
