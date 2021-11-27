import React from "react";
import MenuChapterList from "./MenuChapterList";

const MenuBookList = ({ bookList }) =>
  bookList.map((oneBook, bookIndex) => {
    return (
      <>
        <li key={"book-" + bookIndex}>{oneBook[0][0]}</li>
        <ul className="w3-ul">
          <MenuChapterList chapterList={oneBook[1]} />
        </ul>
      </>
    );
  });

export default MenuBookList;
