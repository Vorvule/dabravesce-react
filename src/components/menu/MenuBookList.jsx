import React from "react";
import MenuChapterList from "./MenuChapterList";

const MenuBookList = ({ bookList }) =>
  bookList.map((book) => {
    return (
      <li key={book.idEn}>
        <details>
          <summary>{book.name}</summary>
          <ul className="w3-ul">
            <MenuChapterList chapterList={book.text} />
          </ul>
        </details>
      </li>
    );
  });

export default MenuBookList;
