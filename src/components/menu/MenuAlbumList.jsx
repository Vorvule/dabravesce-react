import React from "react";
import MenuBookList from "./MenuBookList";

const MenuAlbumList = ({ albumList }) => {
  return albumList.map((albumContent, albumIndex) => {
    return (
      <li key={albumContent.idEn}>
        <details>
          <summary>{albumContent.name}</summary>
          <ul className={"w3-ul"}>
            <MenuBookList
              albumIndex={albumIndex}
              bookList={albumContent.text}
            />
          </ul>
        </details>
      </li>
    );
  });
};

export default MenuAlbumList;
