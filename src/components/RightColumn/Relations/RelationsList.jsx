import React from "react";
import { RelationsListItem } from "./RelationsListItem";
import { relationsListPositions } from "../../context/relationsListPositions";

export const RelationsList = () => {
  return (
    <ul className="w3-ul" id="relations">
      {listItems()}
    </ul>
  );
};

const listItems = () => {
  return relationsListPositions.map((position) => {
    return (
      <RelationsListItem
        key={position.briefText}
        title={position.title}
        url={position.url}
        extraClasses={position.extraClasses}
        briefText={position.briefText}
        fullText={position.fullText}
      />
    );
  });
};
