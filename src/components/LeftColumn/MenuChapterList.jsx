import React from "react";
import { showMiddleColumnContent } from "../../functions/show_middle_column_content";

const MenuChapterList = ({ albumIndex, bookIndex, chapterList }) =>
  chapterList.map((chapterContent, chapterIndex) => {
    const chapterName = chapterContent[0];
    return (
      <li
        key={chapterIndex}
        onClick={() => {
          showMiddleColumnContent(albumIndex, bookIndex, chapterIndex);
        }}
      >
        {chapterName}
      </li>
    );
  });

export default MenuChapterList;
