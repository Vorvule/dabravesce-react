import React from "react";
import MenuBooks from "./MenuBooks";

const MenuVolumes = ({ volumeList }) =>
  volumeList.map((oneVolume, volumeIndex) => {
    return (
      <>
        <li key={"volume-" + volumeIndex}>{oneVolume[0]}</li>
        <ul className="w3-ul">
          <MenuBooks bookList={oneVolume[1]} />
        </ul>
      </>
    );
  });

export default MenuVolumes;
