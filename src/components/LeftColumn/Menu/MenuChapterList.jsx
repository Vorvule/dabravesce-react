import React from "react";

import { Core } from "../../Common/Core";

export const MenuChapterList = ({ albumKey, bookKey, chapterList }) => {
  return chapterList.map((chapterContent, chapterKey) => {
    const chapterName = chapterContent.name.replace(/<br \/>.+/, "");

    return (
      <li
        key={chapterKey}
        onClick={() => Core.show(albumKey, bookKey, chapterKey)}
      >
        {chapterName}
      </li>
    );
  });
};
