import React from "react";
import { showCore } from "../../MiddleColumn/core/showCore";
import { toggleShowCore } from "../../context/toggleShowCore";

export const MenuChapterList = ({ albumIndex, bookIndex, chapterList }) => {
  return chapterList.map((chapterContent, chapterIndex) => {
    const chapterName = chapterContent.name.replace(/<br \/>.+/, "");
    return (
      <li
        key={chapterIndex}
        onClick={() => {
          window.innerWidth < 993 && toggleShowCore();
          showCore(albumIndex, bookIndex, chapterIndex);
        }}
      >
        {chapterName}
      </li>
    );
  });
};
