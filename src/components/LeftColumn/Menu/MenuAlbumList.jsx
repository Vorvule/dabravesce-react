import React from "react";

import { MenuBookList } from "./MenuBookList";
import { Ul } from "./Ul";

export const MenuAlbumList = ({ albumList }) => {
  return albumList.map((albumContent, albumIndex) => {
    const id = albumContent.idEn;
    return (
      <li key={id}>
        <div onClick={() => Ul.toggleShow(id)}>{albumContent.name}</div>
        <ul className="w3-ul w3-hide" id={id}>
          <MenuBookList albumIndex={albumIndex} bookList={albumContent.text} />
        </ul>
      </li>
    );
  });
};
