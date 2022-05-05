import React from "react";
import { Core } from "../../Common/Core";

export const MenuChapterList = ({ albumIndex, bookIndex, chapterList }) => {
  return chapterList.map((chapterContent, chapterIndex) => {
    const chapterName = chapterContent.name.replace(/<br \/>.+/, "");
    return (
      <li
        key={chapterIndex}
        onClick={() => Core.show(albumIndex, bookIndex, chapterIndex)}
      >
        {chapterName}
      </li>
    );
  });
};
