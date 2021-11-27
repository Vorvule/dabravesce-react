import React from "react";
import MenuChapters from "./MenuChapters";

const MenuBooks = ({ bookList }) =>
  bookList.map((oneBook, bookIndex) => {
    return (
      <>
        <li key={"book-" + bookIndex}>{oneBook[0][0]}</li>
        <ul className="w3-ul">
          <MenuChapters chapterList={oneBook[1]} />
        </ul>
      </>
    );
  });

export default MenuBooks;
