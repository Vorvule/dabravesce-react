import React from "react";
import MenuChapterList from "./MenuChapterList";

const MenuBookList = ({ bookList }) =>
  bookList.map((oneBook) => {
    const bookHeader = oneBook[0][0];
    const bookContent = oneBook[1];
    return (
      <>
        <li>{bookHeader}</li>
        <ul className="w3-ul">
          <MenuChapterList chapterList={bookContent} />
        </ul>
      </>
    );
  });

export default MenuBookList;
