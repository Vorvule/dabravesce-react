import React from "react";
import { showCore } from "../MiddleColumn/show_core";
import { getWindowWidth } from "../Top/get_window_width";
import { toggleShowCore } from "../Common/toggle_show_core";

const MenuChapterList = ({ albumIndex, bookIndex, chapterList }) =>
  chapterList.map((chapterContent, chapterIndex) => {
    const chapterName = chapterContent[0];
    return (
      <li
        key={chapterIndex}
        onClick={() => {
          if (getWindowWidth() < 993) {
            toggleShowCore();
          }
          showCore(albumIndex, bookIndex, chapterIndex);
        }}
      >
        {chapterName}
      </li>
    );
  });

export default MenuChapterList;
