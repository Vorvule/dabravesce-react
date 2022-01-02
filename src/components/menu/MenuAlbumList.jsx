import React from "react";
import MenuBookList from "./MenuBookList";

const MenuAlbumList = ({ albumList }) => {
  return albumList.map((album) => {
    return (
      <li key={album.idEn}>
        <details>
          <summary>{album.name}</summary>
          <ul className={"w3-ul"}>
            <MenuBookList bookList={album.text} />
          </ul>
        </details>
      </li>
    );
  });
};

export default MenuAlbumList;
