import React, { useState } from "react";
import MenuBookList from "./MenuBookList";

const MenuVolumeList = ({ volumeList }) => {
  const [menuBookListHidden, setMenuBookListHidden] = useState(true);
  const toggleHideVolumeBookList = () => {
    setMenuBookListHidden(!menuBookListHidden);
  };

  return volumeList.map((volume) => {
    return (
      <div key={volume.abEn}>
        <li onClick={toggleHideVolumeBookList}>{volume.name}</li>
        <ul className={`w3-ul ${menuBookListHidden ? "w3-hide" : ""}`}>
          <MenuBookList bookList={volume.text} />
        </ul>
      </div>
    );
  });
};

export default MenuVolumeList;
