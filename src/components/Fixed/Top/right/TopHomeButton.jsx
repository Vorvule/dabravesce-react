import React from "react";

import { FaButton } from "../../FaButton";
import { Core } from "../../../Common/Core";

export const TopHomeButton = ({ setKeys }) => {
  const newKeys = [0, 0, 0];

  return (
    <FaButton
      fa="fa-home"
      size="w3-xlarge"
      title="У пачатак"
      handler={() => Core.setContent(newKeys, setKeys)}
      classes="w3-right w3-border-left w3-hide-medium w3-hide-small"
    />
  );
};
