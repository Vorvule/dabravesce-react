import React from "react";
import ChapterNames from "./ChapterNames";

const BookNames = (props) => {
  props.volumeContent.map((aVolume, index) => {
    // volume book name
    return (
      <>
        <li key={"book-" + index}>{aVolume[0][0]}</li>
        <ul>
          <ChapterNames bookContent={aVolume[1]} />
        </ul>
      </>
    );
  });
};

export default BookNames;
