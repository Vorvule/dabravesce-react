import React from "react";
import { relationsListPositions } from "../../../context/relationsListPositions";
import { TopButton } from "../TopButton";

export const TopSocialButtons = () => {
  return relationsListPositions.map((position) => {
    return (
      <TopButton
        fa={position.fa}
        key={position.item}
        title={position.item}
        handler={() => window.open(position.url)}
        classes="w3-hide-small w3-hide-medium w3-border-right"
      />
    );
  });
};
