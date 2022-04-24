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
        key={position.constantText}
        title={position.title}
        url={position.url}
        faClass={position.faClass}
        constantText={position.constantText}
        hidableText={position.hidableText}
      />
    );
  });
};
