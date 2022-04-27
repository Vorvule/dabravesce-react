import React from "react";
import { relationsListPositions } from "../../context/relationsListPositions";
import { TopButton } from "../TopButton";

export const TopSocialButtons = () => {
  return relationsListPositions.map((position) => {
    return (
      <TopButton
      key={position.briefText}
        title={position.title}
        addedClasses="w3-hide-small w3-hide-medium w3-border-right"
        clickHandler={() => window.open(position.url)}
        fa={position.extraClasses}
      />
    );
  });
};
