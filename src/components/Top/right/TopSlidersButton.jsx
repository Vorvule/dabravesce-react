import React from "react";
import { TopButton } from "../TopButton";

export const TopSlidersButton = () => {
  return (
    <TopButton
      addedClasses="w3-right w3-border-left w3-hide-large"
      title="Парады і Налады"
      clickHandler={() => onSlidersClick()}
      fa="fa-sliders"
    />
  );
};

const onSlidersClick = () => {};
