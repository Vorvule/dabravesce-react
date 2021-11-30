import React from "react";
import MenuChapterList from "./MenuChapterList";

const MenuBookList = ({ bookList }) =>
  bookList.map((book) => {
    return (
      <div key={book.abEn}>
        <li>{book.name}</li>
        <ul className="w3-ul w3-hide">
          <MenuChapterList chapterList={book.text} />
        </ul>
      </div>
    );
  });

export default MenuBookList;
