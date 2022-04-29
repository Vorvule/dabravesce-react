import React from "react";
import { showCore } from "../../MiddleColumn/core/showCore";

export const MenuChapterList = ({ albumIndex, bookIndex, chapterList }) => {
  return chapterList.map((chapterContent, chapterIndex) => {
    const chapterName = chapterContent.name.replace(/<br \/>.+/, "");
    return (
      <li
        key={chapterIndex}
        onClick={() => showCore(albumIndex, bookIndex, chapterIndex)}
      >
        {chapterName}
      </li>
    );
  });
};
