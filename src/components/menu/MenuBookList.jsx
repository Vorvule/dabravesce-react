import React from "react";
import MenuChapterList from "./MenuChapterList";

const MenuBookList = ({ albumIndex, bookList }) =>
  bookList.map((bookContent, bookIndex) => {
    return (
      <li key={bookContent.idEn}>
        <details>
          <summary>{bookContent.name}</summary>
          <ul className="w3-ul">
            <MenuChapterList
              albumIndex={albumIndex}
              bookIndex={bookIndex}
              chapterList={bookContent.text}
            />
          </ul>
        </details>
      </li>
    );
  });

export default MenuBookList;
