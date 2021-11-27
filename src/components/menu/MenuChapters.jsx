import React from "react";

const MenuChapters = ({ chapterList }) =>
  chapterList.map((oneChapter, chapterIndex) => {
    return <li key={"chapter-" + chapterIndex}>{oneChapter[0]}</li>;
  });

export default MenuChapters;
