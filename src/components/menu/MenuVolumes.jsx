import React from "react";
import MenuBooks from "./MenuBooks";

import gospels from "../../tomes/new_testament_gospels";
import apostols from "../../tomes/new_testament_apostles";

const volumeList = [gospels, apostols];

const MenuVolumes = () => {
  volumeList.map((oneVolume, volumeindex) => {
    console.log(oneVolume[1]);
    return (
      <ul className="w3-ul">
        <li key={"volume-" + volumeindex}>{oneVolume[0]}</li>
        <MenuBooks volume={oneVolume[1]} />
      </ul>
    );
  });
};

export default MenuVolumes;
