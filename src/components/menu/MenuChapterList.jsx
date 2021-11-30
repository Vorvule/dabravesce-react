import React from "react";

const MenuChapterList = ({ chapterList }) =>
  chapterList.map((chapter, index) => {
    const chapterName = chapter[0];
    return <li key={index}>{chapterName}</li>;
  });

export default MenuChapterList;
