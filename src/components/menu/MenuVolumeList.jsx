import React, { useState } from "react";
import MenuBookList from "./MenuBookList";

const MenuVolumeList = ({ volumeList }) => {
  const [menuBookListHidden, setMenuBookListHidden] = useState(true);
  const toggleHideVolumeBookList = () => {
    setMenuBookListHidden(!menuBookListHidden);
  };

  return volumeList.map((volume) => {
    return (
      <>
        <li onClick={toggleHideVolumeBookList}>{volume.name}</li>
        <ul className={`w3-ul ${menuBookListHidden ? "w3-hide" : ""}`}>
          <MenuBookList
            key={volume.abEn}
            bookList={volume.text}
            volumeKey={volume.abEn}
          />
        </ul>
      </>
    );
  });
};

export default MenuVolumeList;
