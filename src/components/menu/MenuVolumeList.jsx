import React from "react";
import MenuBookList from "./MenuBookList";

const MenuVolumeList = ({ volumeList }) =>
  volumeList.map((oneVolume, volumeIndex) => {
    return (
      <>
        <li key={"volume-" + volumeIndex}>{oneVolume[0]}</li>
        <ul className="w3-ul">
          <MenuBookList bookList={oneVolume[1]} />
        </ul>
      </>
    );
  });

export default MenuVolumeList;
