import React from "react";
import { showCore } from "../MiddleColumn/show_core";
import { toggleShowCore } from "../Common/toggle_show_core";

export const MenuChapterList = ({ albumIndex, bookIndex, chapterList }) => {
  return chapterList.map((chapterContent, chapterIndex) => {
    const chapterName = chapterContent.name;
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
