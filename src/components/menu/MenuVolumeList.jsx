import React from "react";
import MenuBookList from "./MenuBookList";

const MenuVolumeList = ({ volumeList }) =>
  volumeList.map((oneVolume) => {
    const volumeHeader = oneVolume[0];
    const volumeContent = oneVolume[1];
    return (
      <>
        <li>{volumeHeader}</li>
        <ul className="w3-ul">
          <MenuBookList bookList={volumeContent} />
        </ul>
      </>
    );
  });

export default MenuVolumeList;
