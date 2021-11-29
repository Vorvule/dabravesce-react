import React from "react";

const MenuChapterList = ({ chapterList, bookKey }) =>
  chapterList.map((chapter, index) => {
    const chapterName = chapter[0];
    return <li key={bookKey + "-" + index}>{chapterName}</li>;
  });

export default MenuChapterList;
