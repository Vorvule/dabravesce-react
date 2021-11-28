import React, { useState } from "react";
import MenuBookList from "./MenuBookList";

const MenuVolumeList = ({ volumeList }) => {
  const [menuBookListHidden, setMenuBookListHidden] = useState(true);
  const toggleHideVolumeBookList = () => {
    setMenuBookListHidden(!menuBookListHidden);
  };

  return volumeList.map((oneVolume) => {
    const volumeHeader = oneVolume[0];
    const volumeContent = oneVolume[1];
    return (
      <>
        <li onClick={toggleHideVolumeBookList}>{volumeHeader}</li>
        <ul className={`w3-ul ${menuBookListHidden ? "w3-hide" : ""}`}>
          <MenuBookList bookList={volumeContent} />
        </ul>
      </>
    );
  });
};

export default MenuVolumeList;
