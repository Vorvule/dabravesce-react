import React from "react";
import { MenuChapterList } from "./MenuChapterList";
import { toggleShow } from "./../Common/toggle-show";

export const MenuBookList = ({ albumIndex, bookList }) => {
  return bookList.map((bookContent, bookIndex) => {
    const id = bookContent.idEn;
    return (
      <li key={id}>
        <div onClick={() => toggleShow(id)}>{bookContent.name}</div>
        <ul id={id} className="w3-ul w3-hide">
          <MenuChapterList
            albumIndex={albumIndex}
            bookIndex={bookIndex}
            chapterList={bookContent.text}
          />
        </ul>
      </li>
    );
  });
};
