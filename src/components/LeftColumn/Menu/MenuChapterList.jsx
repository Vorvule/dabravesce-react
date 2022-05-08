import React from "react";

import { Core } from "../../Common/Core";

export const MenuChapterList = ({
  albumKey,
  bookKey,
  chapterList,
  setKeys,
}) => {
  return chapterList.map((chapterContent, chapterKey) => {
    const chapterName = chapterContent.name.replace(/<br \/>.+/, "");

    const handleClick = () => {
      Core.setContent(setKeys, [albumKey, bookKey, chapterKey]);
    };

    return (
      <li key={chapterKey} onClick={handleClick}>
        {chapterName}
      </li>
    );
  });
};
