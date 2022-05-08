import React from "react";

import { Core } from "../../Common/Core";

export const MenuChapterList = ({ albumKey, bookKey, chapterList }) => {
  return chapterList.map((chapterContent, chapterKey) => {
    const chapterName = chapterContent.name.replace(/<br \/>.+/, "");

    const keys = [albumKey, bookKey, chapterKey];

    const onClick = () => {
      Core.setContent(keys);
    };

    return (
      <li key={chapterKey} onClick={onClick}>
        {chapterName}
      </li>
    );
  });
};
