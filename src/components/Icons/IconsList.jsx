import React from "react";

import { IconsListItem } from "./IconsListItem";
import { iconsCollection } from "./iconsCollection";

export const IconsList = () => {
  return (
    <ul className="w3-ul" id="relations">
      {listIcons()}
    </ul>
  );
};

const listIcons = () => {
  return iconsCollection.map((icon) => {
    return (
      <IconsListItem
        fa={icon.fa}
        url={icon.url}
        key={icon.item}
        item={icon.item}
        title={icon.item}
      />
    );
  });
};
