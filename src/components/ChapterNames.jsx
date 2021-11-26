import React from "react";

const ChapterNames = (props) => {
  props.bookContent.map((aBook, index) => {
    // book chapter name
    return <li key={"chapter-" + index}>{aBook[0]}</li>;
  });
};

export default ChapterNames;
