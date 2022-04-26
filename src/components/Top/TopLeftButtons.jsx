import React from "react";
import { relationsListPositions } from "../context/relationsListPositions";
import { TopButton } from "./TopButton";

export const TopLeftButtons = () => {
  return relationsListPositions.map((position) => {
    return (
      <TopButton
        addedClasses="w3-hide-small w3-border-right"
        title={position.title}
        clickHandler={() => window.open(position.url)}
        fa={position.extraClasses}
      />
    );
  });
};
