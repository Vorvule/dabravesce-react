import React from "react";
import { MenuBookList } from "./MenuBookList";
import { toggleShow } from "./../Common/toggle-show";

export const MenuAlbumList = ({ albumList }) => {
  return albumList.map((albumContent, albumIndex) => {
    const id = albumContent.idEn;
    return (
      <li key={id}>
        <div onClick={() => toggleShow(id)}>{albumContent.name}</div>
        <ul className="w3-ul w3-animate-right w3-hide" id={id}>
          <MenuBookList albumIndex={albumIndex} bookList={albumContent.text} />
        </ul>
      </li>
    );
  });
};
