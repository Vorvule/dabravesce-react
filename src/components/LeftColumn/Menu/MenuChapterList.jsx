import React from "react";
import { showCore } from "../../MiddleColumn/showCore";
import { toggleShowCore } from "../../Common/toggleShowCore";

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
