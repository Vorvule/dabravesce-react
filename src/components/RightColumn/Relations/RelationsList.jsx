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
        fa={position.fa}
        url={position.url}
        key={position.item}
        item={position.item}
        title={position.item}
      />
    );
  });
};
