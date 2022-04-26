import React from "react";
import { TopButton } from "./TopButton";

export const TopAsideButton = () => {
  return (
    <TopButton
      addedClasses="w3-border-right w3-hide-large"
      title="Парады і Налады"
      clickHandler={() => asideButtonHandler()}
      fa="fa-sliders"
    />
  );
};

const asideButtonHandler = () => {};
