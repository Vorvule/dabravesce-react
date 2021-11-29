import React from "react";
import MenuChapterList from "./MenuChapterList";

const MenuBookList = ({ bookList, volumeKey }) =>
  bookList.map((book) => {
    const bookKey = volumeKey + "-" + book.abEn;
    return (
      <>
        <li key={bookKey}>{book.name}</li>
        <ul key="chapters" className="w3-ul w3-hide">
          <MenuChapterList chapterList={book.text} bookKey={bookKey} />
        </ul>
      </>
    );
  });

export default MenuBookList;
