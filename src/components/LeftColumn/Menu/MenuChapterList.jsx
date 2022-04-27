import React from "react";
import { showCore } from "../../MiddleColumn/core/showCore";
import { showOneColumnWithId } from "../../context/showOneColumnWithId";

export const MenuChapterList = ({ albumIndex, bookIndex, chapterList }) => {
  return chapterList.map((chapterContent, chapterIndex) => {
    const chapterName = chapterContent.name.replace(/<br \/>.+/, "");
    return (
      <li
        key={chapterIndex}
        onClick={() => {
          showCore(albumIndex, bookIndex, chapterIndex);
          window.innerWidth < 993 && showOneColumnWithId("MiddleColumn");
        }}
      >
        {chapterName}
      </li>
    );
  });
};
