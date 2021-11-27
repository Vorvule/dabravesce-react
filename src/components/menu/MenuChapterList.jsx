import React from "react";

const MenuChapterList = ({ chapterList }) =>
  chapterList.map((oneChapter) => {
    const chapterHeader = oneChapter[0];
    return <li>{chapterHeader}</li>;
  });

export default MenuChapterList;
