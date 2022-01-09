import React from "react";
import { showMiddleColumnContent } from "../../functions/show_middle_column_content";
import { toggleMenuAndCore } from "../../functions/toggle_menu_and_core";

const MenuChapterList = ({ albumIndex, bookIndex, chapterList }) =>
  chapterList.map((chapterContent, chapterIndex) => {
    const chapterName = chapterContent[0];
    return (
      <li
        key={chapterIndex}
        onClick={() => {
          showMiddleColumnContent(albumIndex, bookIndex, chapterIndex);
          toggleMenuAndCore();
        }}
      >
        {chapterName}
      </li>
    );
  });

export default MenuChapterList;
