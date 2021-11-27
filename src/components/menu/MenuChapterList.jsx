import React from "react";

const MenuChapterList = ({ chapterList }) =>
  chapterList.map((oneChapter, chapterIndex) => {
    return <li key={"chapter-" + chapterIndex}>{oneChapter[0]}</li>;
  });

export default MenuChapterList;
