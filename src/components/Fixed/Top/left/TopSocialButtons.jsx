import React from "react";
import { relationsListPositions } from "../../../context/relationsListPositions";
import { FaButton } from "../../FaButton";

export const TopSocialButtons = () => {
  return relationsListPositions.map((position) => {
    return (
      <FaButton
        fa={position.fa}
        size="w3-xlarge"
        key={position.item}
        title={position.item}
        handler={() => window.open(position.url)}
        classes="w3-hide-small w3-hide-medium w3-border-right"
      />
    );
  });
};
