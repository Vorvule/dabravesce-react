import React from "react";
import { TopButton } from "./TopButton";

import { showCore } from "../MiddleColumn/core/showCore";
import { toggleShowCore } from "../context/toggleShowCore";

export const TopRightButtons = () => {
  return (
    <>
      <TopButton
        addedClasses="w3-right w3-border-left w3-hide-medium w3-hide-small"
        title="У пачатак"
        clickHandler={() => showCore(0, 0, 0)}
        fa="fa-home"
      />

      {/* medium and small screens:  */}

      <TopButton
        addedClasses="w3-right w3-border-left w3-hide-large"
        title="Змест"
        clickHandler={toggleShowCore}
        fa="fa-bars"
      />
    </>
  );
};
